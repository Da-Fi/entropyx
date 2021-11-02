#! /bin/bash

set -e

if [[ -z "${ETHERSCAN_TOKEN}" ]]; then
  echo "Please provide your ETHERSCAN_TOKEN as env variable."
  exit 1
fi

if [[ -z "${WEB3_INFURA_PROJECT_ID}" ]]; then
  echo "Please provide your WEB3_INFURA_PROJECT_ID as env variable."
  exit 1
fi

rm -fr dafidao-mainnet-fork || true
git clone https://github.com/Da-Fi/dafidao-mainnet-fork.git
cd dafidao-mainnet-fork
docker build --build-arg ETHERSCAN_TOKEN --build-arg WEB3_INFURA_PROJECT_ID -t dafidao-mainnet-fork .
cd ..
docker-compose up
