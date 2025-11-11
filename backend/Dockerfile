FROM node:23-alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 17700

CMD ["npm", "run", "dev"]