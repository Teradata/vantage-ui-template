FROM node:carbon

# Create app directory
WORKDIR /usr/share/app

# Install app dependencies
COPY nodejs/package.json .
COPY nodejs/docker-start.sh /
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install

# Bundle app source
COPY nodejs/server.js .
COPY . .

EXPOSE 8080
CMD ["/docker-start.sh"]
