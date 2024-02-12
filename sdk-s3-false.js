require("dotenv").config();

const fs = require('fs');
const AWS = require('aws-sdk');

// Set your S3-compatible storage service credentials and endpoint
const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  endpoint: process.env.ENDPOINT,
  s3ForcePathStyle: false,
});

// Specify the bucket name and key (path) for the S3 object
const bucketName = process.env.CONTAINER;
const key = 'survey/evidence/'+Math.floor(Date.now() / 1000)+'/' + process.env.UPLOAD_FILE_NAME;

// Specify the local path of the image file
const localImagePath = './' + process.env.UPLOAD_FILE_NAME;

// Read the image file from the local file system
const fileContent = fs.readFileSync(localImagePath);

// Set the parameters for the S3-compatible upload
const params = {
  Bucket: bucketName,
  Key: key,
  Body: fileContent,
  ContentType: 'image/jpeg', // Change this based on your image type
};

// Upload the file to the S3-compatible service
s3.upload(params, (err, data) => {
  if (err) {
    console.error('Error uploading to S3-compatible storage:', err);
  } else {
    console.log('File uploaded successfully. S3 Object URL:', data.Location);
  }
});