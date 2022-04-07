FROM node:11-alpine

WORKDIR /app

COPY . .


RUN npm install

EXPOSE 1515

CMD ["npm", "run", "start"]
