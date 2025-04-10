FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN apk add --no-cache curl netcat-openbsd
COPY . .
RUN npm run build
COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh
EXPOSE 3000
CMD ["/wait-for.sh", "mongo", "node", "dist/index.js"]