FROM nginx

# 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
RUN rm -rf /etc/nginx/conf.d

# custom 설정파일을 컨테이너 내부로 복사한다.
COPY ./nginx.conf /etc/nginx/nginx.conf

# 컨테이너의 80번 포트를 열어준다.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]