FROM node:18

WORKDIR /app

COPY package*.json ./

ARG REVDEBUG_SERVER_HOSTNAME_COMMAND

RUN npm config set @revdebug:registry https://nexus.revdebug.com/repository/npm/
RUN npm install
RUN npm install @revdebug/revdebug

COPY . .

RUN npx revd $REVDEBUG_SERVER_HOSTNAME_COMMAND
RUN npm run build --prod

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "dist/revdebug-demo-app/browser", "-p", "8080"]