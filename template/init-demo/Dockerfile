FROM node:carbon-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app source
COPY . /app
RUN npm install
RUN npm run build

EXPOSE 3000
## the start script define in package.json
CMD ["npm", "run","start:prod" ]