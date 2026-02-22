# Stage 1: Build Frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: Bundle everything
FROM node:18-alpine
WORKDIR /app
# We are currently in the root, so we copy backend files
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend/ ./
# Copy frontend build to backend's public directory
COPY --from=frontend-builder /app/frontend/dist ./public

ENV PORT=8080
ENV NODE_ENV=production
# Ensure we bind to 0.0.0.0 implicitly via server.js but also good to have here
EXPOSE 8080

CMD ["node", "server.js"]
