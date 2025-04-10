# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/templates/default.conf.template
ENV BACKEND_URL=http://backend:3000
RUN apk add --no-cache bash curl
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
EXPOSE 80
CMD ["/docker-entrypoint.sh"]