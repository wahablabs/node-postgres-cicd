# ==========================================
# Stage 1: Build & Dependencies (Builder)
# ==========================================
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# ==========================================
# Stage 2: Production Stage (Final Runtime)
# ==========================================
FROM node:18-alpine AS runner

WORKDIR /app

USER node

COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node . .

EXPOSE 3000

CMD ["node", "src/index.js"]