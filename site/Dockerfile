# Fieravend website for Coolify: build with Node (no npm dependencies), serve with Caddy.
# Base images pinned by digest (A03). Traefik in front terminates TLS; Caddy only listens on :80 inside the network.
# Build context: repository root, Dockerfile location: /site/Dockerfile.
FROM node:22-alpine@sha256:0a7108bf6c7bf5de370ffb1a3ed6be93d405b43ff159f681a8d18c0e2bc2e402 AS build
WORKDIR /src
COPY site ./site
RUN node site/build.mjs

FROM caddy:2-alpine@sha256:d8542f48d34a9cf4e4c11a478865229840e87e4c96ea3f439101f31a5d35f75f
COPY site/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /src/site/dist /srv
EXPOSE 80
