FROM node:alpine
WORKDIR /frontend/
COPY . /frontend/
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 80
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check", "--proxy-config", "proxy.conf.json"]
