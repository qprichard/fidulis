FROM node:16.3.0-alpine as build_deps
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build

FROM nginx:1.21.4-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build_deps /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx" , "-g", "daemon off;"]