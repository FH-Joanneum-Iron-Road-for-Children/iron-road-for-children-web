FROM node:bullseye-slim as node

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine

LABEL org.opencontainers.image.source = "https://github.com/FH-Joanneum-Iron-Road-for-Children/iron-road-for-children-web"

COPY --from=node /app/dist/iron-road-for-children-web /usr/share/nginx/html

EXPOSE 80
