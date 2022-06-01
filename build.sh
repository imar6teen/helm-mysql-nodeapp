#/bin/sh


if [ "${NODE_ENV}" == "development" ]; then
    echo "Running development build";
    npx prisma db push;
else
    echo "Running production build";
    npx prisma migrate deploy;
fi

    npm start