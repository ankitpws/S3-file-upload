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

We have added three four script to check wether file upload will work on nic server or not.

#### script 1 

Run script 1 (sdk-s3-false)

    node sdk-s3-false.js

#### script 2 

Run script 2 (sdk-s3-true):

    node sdk-s3-true.js

#### script 3

Run script 3 (ceph):

    node ceph.js

#### script 4 

Run script 4 (s3):

    node s3.js

Share the output:

If you encountered any issues, please include relevant error messages or logs.
If the scripts executed successfully, share any generated files or results as requested.