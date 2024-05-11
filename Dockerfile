FROM node:20.11.1-alpine3.19

WORKDIR /usr/src/app
COPY ./dist ./dist
COPY ./node_modules ./node_modules
COPY ./package.json .
CMD ["node", "dist/index.js"]