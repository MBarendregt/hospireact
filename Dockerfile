# base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
# RUN npm install --no-bin-links
#     eslint-plugin-react --save-dev \
#     react-scripts -g --silent \
#     react-router-dom \
#     react-router-hash-link --save \
#     validator \
#     i18next i18next-xhr-backend react-i18next -S \
#     i18next-browser-languagedetector --save \
#     react-mailto --save \
#     @aws-amplify/cli \
#     aws-sdk --save \
#     dotenv --save \
#     react-s3

# RUN npm install eslint-plugin-react
# RUN npm install react-scripts@3.0.1 -g --silent
# RUN npm install react-burger-menu --save
# RUN npm install react-router-dom
# RUN npm install react-router-hash-link
# RUN npm install validator
# RUN npm install i18next i18next-xhr-backend react-i18next
# RUN npm install i18next-browser-languagedetector
# RUN npm install react-mailto
RUN npm install @aws-amplify/cli
# RUN npm install aws-sdk
# RUN npm install dotenv
# RUN npm install react-s3
# RUN npm install react-burger-menu --save
# RUN npm install typescript
# # start app
EXPOSE 3000
EXPOSE 3001
# CMD ["npm", "start"]