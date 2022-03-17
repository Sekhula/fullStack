FROM node:14-alpine3.10

RUN mkdir -p /app

WORKDIR /app

COPY /package*.json ./

RUN  npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]