FROM node:12 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src src
RUN npm run build

FROM node:12
ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/dist/ dist/

COPY public/ public/

CMD [ "node", "dist/index.js" ]
