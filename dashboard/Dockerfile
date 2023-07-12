FROM node:lts-alpine

ARG NODE_ENV=development
ENV NODE_ENV ${ENV}

ARG PORT=3000
ENV PORT ${PORT}

WORKDIR /home/node/app

COPY package*.json *.lock ./

RUN if [ "$NODE_ENV" = "development" ]; \
		then yarn install; \
		else yarn install --frozen-lockfile --production; \
	fi

COPY . .

EXPOSE ${PORT}

CMD yarn "$(if [ $NODE_ENV = 'production' ] ; then echo 'start' ; else echo 'dev'; fi)"