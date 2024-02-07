# S3-file-upload

## Clone S3-FILE-UPLOAD Repo

### Step 1: Clone Repository

Clone the repository into your server using the following command:

    git clone https://github.com/ankitpws/S3-file-upload.git

### Step 2: Navigate to Project Folder

Move into the cloned 'S3-file-upload' folder:

    cd S3-file-upload

### Step 3: Install Packages

Install the required npm packages:

    npm i

### Step 4: Create Environment File

Create a new file named .env in the project root and add the following variables:

    ACCESS_KEY=AKI*****************T43         # Access key
    SECRET_ACCESS_KEY=3MG******************************dH5  # Secret key
    ENDPOINT=s3.domain.com                          # Endpoint
    CONTAINER=storage                               # Container name
    UPLOAD_FILE_NAME=file.png                       # File name to be uploaded (must be present in the same directory)

### Step 5: Execute Script

Run the script to upload the file to the S3 bucket:

    node index.js

After execution, the script will print the URL of the uploaded file in the S3 bucket.