FROM node:10-alpine
MAINTAINER joeri.jackers@kbc.be

COPY package.json /opt/package.json

WORKDIR /opt

RUN npm install --prod

COPY . /opt

EXPOSE 3001

CMD ["npm", "start"]

