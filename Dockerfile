FROM node:24

WORKDIR /usr/src/app

# npm init
# npm install express --save

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node","index.js"]
