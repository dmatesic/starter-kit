FROM node:10.14.0
WORKDIR /usr/src/app
COPY . .
RUN npm ci --production
EXPOSE 3001
ENTRYPOINT node dist/index.js
