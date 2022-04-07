FROM node:16-alpine
WORKDIR /usr/src/aplicacion
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 7777
CMD ["node", "dist/index.js"]
