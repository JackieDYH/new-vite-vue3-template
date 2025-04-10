FROM registry.cn-hangzhou.aliyuncs.com/mita3d/mita3d-base:mita-node-20.11.1-slim AS build

COPY . /app/

WORKDIR /app

RUN pnpm install
RUN pnpm run build:prod

FROM registry.cn-hangzhou.aliyuncs.com/mita3d/mita3d-base:mita-nginx-latest

ENV TZ=Asia/Shanghai

# 将构建好的前端项目复制到nginx服务器的html目录下
COPY --from=build /app/dist /usr/share/nginx/html