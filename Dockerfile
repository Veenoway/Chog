FROM node:20.12.0-alpine

WORKDIR /app

ARG DOCKER_TAG
ENV APP_VERSION=$DOCKER_TAG

RUN npm install

COPY package.json .

COPY . .

RUN npm install

RUN npm run dev

EXPOSE 3000

CMD npm run prod