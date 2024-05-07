FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i webpack-dev-middleware

COPY ./ ./

EXPOSE 3000

CMD ["npm","start"]