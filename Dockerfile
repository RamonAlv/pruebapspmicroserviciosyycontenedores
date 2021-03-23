FROM node:12.18.2

WORKDIR /urs/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3300

CMD [ "npm", "start"]
