# base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install react-router-dom
RUN npm install --save react-router-hash-link
RUN npm install validator
RUN npm i i18next i18next-xhr-backend react-i18next -S
RUN npm install i18next-browser-languagedetector --save
RUN npm install i18next-xhr-backend --save
RUN npm install --save react-mailto
RUN npm install -g @aws-amplify/cli
# RUN npm imstall --save react-s3-uploader
RUN npm install aws-sdk --save 
RUN npm install dotenv --save 
RUN npm install react-s3

# # start app
EXPOSE 3000
EXPOSE 3001
# CMD ["npm", "start"]