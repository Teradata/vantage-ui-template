FROM nginx:1.9
COPY * /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY nginx/default.conf /etc/nginx/conf.d/
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/mime.types /etc/nginx/
COPY nginx/docker-start.sh /

EXPOSE 8080

CMD ["/docker-start.sh"]
