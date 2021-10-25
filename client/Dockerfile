# base image
FROM node:alpine

ENV CI=true

# specify directory, executes commands relative to this
WORKDIR /app
# copy from working directory to container
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]