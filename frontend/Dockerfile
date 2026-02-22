# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Default Nginx configuration uses port 80, but we'll configure Cloud Run to use 5678
# Custom nginx config to handle SPA routing if needed
# Copy a template for the nginx config
RUN mkdir -p /etc/nginx/templates && echo 'server { \
    listen 5678; \
    location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files $uri $uri/ /index.html; \
    } \
    location /api { \
    proxy_pass ${API_PROXY_TARGET}; \
    } \
    }' > /etc/nginx/templates/default.conf.template

EXPOSE 5678
CMD ["nginx", "-g", "daemon off;"]
