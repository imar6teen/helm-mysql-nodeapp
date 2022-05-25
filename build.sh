#/bin/sh

if ["$NODE_ENV" = "development"]; then
    npx prisma db push;
    else
    npx prisma deploy;
    fi

    npm start