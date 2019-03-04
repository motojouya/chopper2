FROM node:11.10

RUN apt-get update

ENV NODE_PATH=/usr/local/lib/node_modules

RUN useradd -d /home/chopper2 -m -s /bin/bash chopper2 && \
    mkdir /usr/local/src/chopper2 && \
    chown chopper2 /usr/local/src/chopper2 && \
    chmod 755 /usr/local/src/chopper2

WORKDIR /usr/local/src/chopper2
COPY . ./
RUN chown -R chopper2:chopper2 .

USER chopper2
RUN npm install

CMD npm start
