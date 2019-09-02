FROM node:12.2.0-alpine
WORKDIR /app
COPY . ./
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.1.1 -g --silent
CMD ["npm", "start"]