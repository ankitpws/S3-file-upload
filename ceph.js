require("dotenv").config();
const ceph = require('ceph');
const fs = require('fs');

// Create a Ceph S3 client with your credentials and endpoint
const client = ceph.createClient({
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_ACCESS_KEY,
  endpoint:  process.env.ENDPOINT,
  s3ForcePathStyle: true,
});

// Specify the bucket name and file path
const bucketName = process.env.CONTAINER;
const filePath ='survey/evidence/'+Math.floor(Date.now() / 1000)+'/' + process.env.UPLOAD_FILE_NAME;

// Read the file content
const fileContent = fs.readFileSync(filePath);

// Set the parameters for S3 upload
const params = {
  Bucket: bucketName,
  Key: filePath, // The name you want to give to the file in S3
  Body: fileContent,
};

// Upload the file to the Ceph S3-compatible storage
client.putObject(params, (err, data) => {
  if (err) {
    console.error('Error uploading file:', err);
  } else {
    console.log('File uploaded successfully. S3 Object URL:', data.Location);
  }
});
