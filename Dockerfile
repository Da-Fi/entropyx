FROM node:fermium

RUN mkdir -p /app/entropyx
WORKDIR /app/entropyx
ADD . /app/entropyx
RUN yarn install

ENTRYPOINT ["yarn", "dev"]
