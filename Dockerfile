FROM node:18.19.1

WORKDIR /home/l3/Documents/Software_Engineering/microservices_devops/double/iteration-1/

COPY package*.json .

RUN npm ci --omit=dev

COPY ./src ./src

COPY ./videos ./videos

CMD npm start
