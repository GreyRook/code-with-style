FROM docker.io/greyrook/cde-dev-js:8e3a9103160e390efcd135faa0a0122aed7088c7

RUN npm install -g serve

COPY . /app

WORKDIR /app

RUN yarn install
RUN yarn build