<!-- @format -->

# whitehome.io

Landing page for my homelab. Lists publicly accessible services and gives a brief overview of the stack.

## Stack

- **Framework:** Nuxt 3
- **Package manager:** pnpm

## Dev

```bash
pnpm install
pnpm dev
```

## Deployment

**Static (recommended — just files, no server needed)**

```bash
pnpm generate
# output in .output/public — serve with nginx/caddy
```

**Node server**

```bash
pnpm build
node .output/server/index.mjs
```

**Docker**

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN npm i -g pnpm && pnpm install && pnpm generate

FROM nginx:alpine
COPY --from=build /app/.output/public /usr/share/nginx/html
```
