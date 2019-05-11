FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y xorg
RUN apt-get install -y nano   
RUN apt-get install -y npm
RUN apt-get install -y libxkbcommon-x11-0
RUN apt-get install -y htop
RUN apt-get install -y psmisc
RUN mkdir /app/
COPY app/package.json  /app/package.json

RUN cd /app \
&& npm  install 


COPY app /app

ENTRYPOINT ["node","/app/app.js"]