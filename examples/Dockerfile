# 基础镜像
FROM swr.cn-east-2.myhuaweicloud.com/cps90/nginx:1.17.5-alpine

# 将编译生成后的文件复制到容器内
COPY ./peacock9 /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

RUN chmod -R 777 *