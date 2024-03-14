FROM node:20.11.1

# WORKDIR /usr/src/app
RUN mkdir /code
WORKDIR /code

COPY . /code/

RUN npm install

EXPOSE 5000

CMD [ "node","app.js"]