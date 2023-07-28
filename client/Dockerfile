FROM node:16-alpine

ARG NODE_ENV="development"

RUN mkdir -p ./client

WORKDIR /client

COPY package*.json ./

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 3000



# RUN npm install

# RUN  cd node_modules && mkdir .cache && chmod -R 777 .cache




CMD npm start