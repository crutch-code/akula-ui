#!/bin/bash

export APP=$(cat package.json | jq -r '.name')
export VERSION=$(cat package.json | jq -r '.version')

npm install --package-lock || exit 1
npm ci || exit 1
npm run build || exit 1
helm lint chart/ || exit 1

docker build . -t repo.gcg.name/gcg-docker/$APP:$VERSION || exit 1
docker push repo.gcg.name/gcg-docker/$APP:$VERSION || exit 1
helm package chart/ --app-version $VERSION --version $VERSION || exit 1
curl -u helm-rw:EiphiCh3Av7eitie -X PUT "https://repo.gcg.name/repository/gcg-helm/$APP-$VERSION.tgz" -T ./$APP-$VERSION.tgz || exit 1
sleep 20

helm repo update || exit 1
helm upgrade $APP gcg/$APP --install --wait --version $VERSION --namespace apps --timeout 5m
