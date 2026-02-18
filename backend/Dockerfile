FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 5679
CMD ["node", "server.js"]
