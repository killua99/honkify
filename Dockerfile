FROM wordpress:php7.1-fpm-alpine

ADD https://raw.githubusercontent.com/eficode/wait-for/master/wait-for /usr/local/bin/wait-for

RUN set -eux; \
	\
	chmod a+x /usr/local/bin/wait-for && \
	apk add --no-cache --virtual .build-deps ${PHPIZE_DEPS} && \
	pecl -q install xdebug && \
	ls -lha && \
	docker-php-ext-enable xdebug && \
	apk del -f .build-deps

EXPOSE 9000
