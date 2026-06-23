FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm generate

#
FROM nginx:alpine

COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80
