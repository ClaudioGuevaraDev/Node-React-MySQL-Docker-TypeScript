FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

ENV APP_PORT=4000

EXPOSE 4000

CMD ["npm", "start"]