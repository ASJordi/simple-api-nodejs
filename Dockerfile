FROM node:22.11.0-alpine3.20 AS prod

LABEL org.opencontainers.image.source=https://github.com/ASJordi/simple-api-nodejs
LABEL org.opencontainers.image.description="simple-api-nodejs"
LABEL org.opencontainers.image.licenses=MIT

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

RUN apk --no-cache add curl

HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 \
CMD curl -f http://localhost:3000 || exit 1

CMD ["npm", "run", "start"]
