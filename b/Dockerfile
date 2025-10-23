FROM node:18
workdir /app
copy package.json .
run npm install
copy . .
CMD ["npm","start"]
