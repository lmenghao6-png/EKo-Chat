# Multi-stage build for Next.js production
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copy only runtime artifacts
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package*.json ./
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
# Bind on 0.0.0.0 to accept external connections
CMD ["npm","start","--","-H","0.0.0.0","-p","3000"]


