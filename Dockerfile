FROM node:18

COPY . /app

WORKDIR /app

RUN npm install

RUN npm install -g typescript

RUN npx prisma generate

CMD tsc && node dist/main.js
