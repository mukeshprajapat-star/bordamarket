FROM node:14.17.5-alpine3.14

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm","run","dev" ]