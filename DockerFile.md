FROM node:lts-alpine3.21

WORKDIR /usr/src/api

COPY . .

COPY ./.env.production ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error

# Gere o cliente Prisma
RUN npx prisma generate

RUN npm run build

# EXPOSE ${PORT:-3000}
EXPOSE 3333 

CMD ["npm","run","start:prod"]