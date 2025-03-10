FROM node:22-alpine AS base


FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile


FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN corepack enable pnpm && pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.output ./

EXPOSE 3000

ENV HOST="0.0.0.0"
ENV PORT="3000"

CMD ["node", "server/index.mjs"]
