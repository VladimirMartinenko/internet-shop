FROM node:16-alpine

ARG NODE_ENV="development"

RUN mkdir -p ./client

WORKDIR /client

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache



CMD npm start