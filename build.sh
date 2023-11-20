#!/bin/bash

export APP=$(cat settings.gradle | grep -m 1 '^rootProject.name' | awk -F '"' '$0=$2')
export VERSION=$(cat build.gradle | grep -m 1 '^version' | awk -F '"' '$0=$2')

npm install --package-lock || exit 1
npm ci || exit 1
npm run build || exit 1
helm lint chart/ || exit 1

docker build . -t repo.gcg.name/gcg-docker/$APP:$VERSION || exit 1
docker push repo.gcg.name/gcg-docker/$APP:$VERSION || exit 1
helm package chart/ --app-version $VERSION --version $VERSION || exit 1


sleep 20

helm repo update || exit 1
helm upgrade $APP gcg/$APP --install --wait --version $VERSION --namespace apps --timeout 5m
