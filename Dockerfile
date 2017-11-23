FROM node:8

ENV NODE_ENV production

EXPOSE 3000 3001

# Install packages
ADD package.json /dist/package.json
ADD package-lock.json /dist/package-lock.json
RUN cd /dist && npm install

# Copy code
ADD . /srv/teams-generator
RUN ln -s /dist/node_modules /srv/teams-generator/node_modules

WORKDIR /srv/teams-generator

# Build
RUN npm run build

#CMD ["npm", "run", "start:prod"]
