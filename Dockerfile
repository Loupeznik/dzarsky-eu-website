FROM node:20.11.1-alpine3.19 AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.4 --activate
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:20.11.1-alpine3.19 AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.0.4 --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM nginx:1.25.4-alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
