FROM node:15.10.0-alpine3.13

WORKDIR /usr/app

COPY package.json .

RUN npm i --only=prod

COPY . .

CMD ["npm", "start"]
