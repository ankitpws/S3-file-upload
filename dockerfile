FROM node:16

WORKDIR /opt/s3

#copy package.json file
COPY package.json /opt/s3

#install node packges
RUN npm install

#copy all files 
COPY . /opt/s3

#start the application
CMD node index.js