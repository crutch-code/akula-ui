FROM nginxinc/nginx-unprivileged:1.19.0-alpine
COPY ./build /usr/share/nginx/html
ADD default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
