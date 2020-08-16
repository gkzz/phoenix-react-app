FROM elixir:1.10.4


RUN apt-get update && \
    apt-get install -y postgresql-client-11 && \
    apt-get install -y inotify-tools && \
    apt-get install -y nodejs && \
    curl -L https://npmjs.org/install.sh | sh && \
    mix local.hex --force && \
    mix archive.install hex phx_new 1.5.4 --force && \
    mix local.rebar --force


COPY ./opt/docker-entrypoint.sh /opt/docker-entrypoint.sh
WORKDIR /opt/
ENTRYPOINT ["docker-entrypoint.sh"]
