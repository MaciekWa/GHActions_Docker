FROM node:16

ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME MongoDataBaseMW
ENV MONGODB_CLUSTER_ADDRESS cluster0.z1l2m.mongodb.net
ENV MONGODB_USERNAME tt8950332@gmail.com
ENV MONGODB_PASSWORD zaq1@WSX

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
