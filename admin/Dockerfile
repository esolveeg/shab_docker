FROM node:12.16.3-alpine3.9


# install simple http server for serving static content
RUN npm install -g http-server
RUN mkdir -p /var/www/admin
WORKDIR /var/www/admin

COPY package*.json ./
RUN npm install

COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]