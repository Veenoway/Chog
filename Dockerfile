FROM node:20.12.0-alpine

WORKDIR /app

ARG DOCKER_TAG
ENV APP_VERSION=$DOCKER_TAG

RUN npm install

COPY package.json .

COPY . .

EXPOSE 3000

RUN npm install

RUN npm run dev

