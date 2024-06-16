FROM node:20.12.0-alpine

WORKDIR /app

ARG DOCKER_TAG
ENV APP_VERSION=$DOCKER_TAG

RUN npm install --quiet node-gyp -g

COPY package.json .

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm","run","dev"]

