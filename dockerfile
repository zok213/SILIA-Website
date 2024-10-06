FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

RUN npm install -g serve

ENV PORT 3000

EXPOSE 3000

CMD ["serve", "-s", "build"]
