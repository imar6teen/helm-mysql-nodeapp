FROM node:16 AS build

RUN apt-get update && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV

RUN if [ "${NODE_ENV}" == "development" ]; \
    then \
    npm install; \
    else \
    npm install --omit=dev; \
    fi

COPY . .

# stage 2
FROM node:16-alpine

WORKDIR /app

# COPY --chown=node:node --from=build /app .

COPY --from=build /app .

RUN npx prisma generate

CMD ["./build.sh"]