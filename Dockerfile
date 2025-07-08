FROM node:24

WORKDIR /usr/src/app

# npm init
# npm install express --save

COPY . .

EXPOSE 8080

CMD ["node","index.js"]
