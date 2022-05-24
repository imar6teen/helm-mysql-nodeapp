
if ["$1" = ""]; then
    echo "Please attach a NODE_ENV argument"
    exit 1
else
    echo "Building for $1"
fi 

docker build --no-cache \
     --build-arg NODE_ENV=$1 \
     -t k8s-backend:latest \
     -t k8s-backend:$(git rev-parse --short HEAD) .