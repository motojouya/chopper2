FROM node:11.10

RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main " >> /etc/apt/sources.list.d/google.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable && \
    apt-get install -y chromedriver

RUN mkdir /usr/local/src/chopper2
WORKDIR /usr/local/src/chopper2
