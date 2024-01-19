FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY . .
RUN npm install --omit=dev

USER node

EXPOSE 3000

CMD [ "npm","start" ]
