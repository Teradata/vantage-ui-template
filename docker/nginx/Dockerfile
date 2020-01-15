FROM alpine:3.2
RUN apk update
RUN apk add bash
RUN apk add nginx
RUN rm -rf /var/cache/apk/*
COPY * /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/mime.types /etc/nginx/
COPY nginx/docker-start.sh /

EXPOSE 8080
VOLUME ["/usr/share/nginx/html"]

CMD ["/docker-start.sh"]
