FROM nginx:1-alpine

ARG CREATED
ARG REVISION
ARG VERSION
ARG TITLE
ARG SOURCE
ARG AUTHORS
LABEL org.opencontainers.image.created=$CREATED \
        org.opencontainers.image.revision=$REVISION \
        org.opencontainers.image.title=$TITLE \
        org.opencontainers.image.source=$SOURCE \
        org.opencontainers.image.version=$VERSION \
        org.opencontainers.image.authors=$AUTHORS \
        org.opencontainers.image.vendor="Habx"

COPY build /app/build
COPY nginx.conf /etc/nginx/

CMD ["nginx"]
