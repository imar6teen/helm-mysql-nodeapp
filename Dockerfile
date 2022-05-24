FROM node:16 AS build

RUN apt-get update && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ENV APP_PATH /app

WORKDIR ${APP_PATH}

COPY ./package.* ${APP_PATH}

ARG NODE_ENV

RUN if [ NODE_ENV = "production"]; then \
    npm install --production; \
    else \
    npm install; \
    fi

COPY . ${APP_PATH}

# stage 2
FROM node:16-alpine

USER docker

COPY --chown=docker:docker --from=build /app /app

ENTRYPOINT [ "npm" ]

CMD ["start"]