FROM node:lts-alpine

ARG NODE_ENV=development
ENV NODE_ENV ${ENV}

ARG PORT=8080
ENV PORT ${PORT}

WORKDIR /home/node/app

COPY package*.json *.lock ./

RUN yarn install

COPY . .

EXPOSE ${PORT}

CMD "yarn $(if [ $NODE_ENV = 'production' ] ; then echo 'start' ; else echo 'dev'; fi)"