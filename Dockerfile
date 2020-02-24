# base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install \
    eslint-plugin-react --save-dev \
    react-scripts -g --silent \
    react-router-dom \
    react-router-hash-link --save \
    validator \
    i18next i18next-xhr-backend react-i18next -S \
    i18next-browser-languagedetector --save \
    react-mailto --save \
    react-infinite-scroller --save \
    @aws-amplify/cli \
    aws-sdk --save \
    dotenv --save \
    react-s3

# # start app
EXPOSE 3000
EXPOSE 3001
# CMD ["npm", "start"]