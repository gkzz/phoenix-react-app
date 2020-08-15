FROM elixir:1.10.4

#ENV NODE_VERSION 12.x
#
#RUN curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash \
#  && apt-get install -y nodejs
#
#RUN npm install npm@latest -g
#
#RUN mix local.hex --force && \
#  mix archive.install hex phx_new 1.5.4 --force && \
#  mix local.rebar --force

RUN apt-get update && \
    apt-get install -y postgresql-client && \
    apt-get install -y inotify-tools && \
    apt-get install -y nodejs && \
    curl -L https://npmjs.org/install.sh | sh && \
    mix local.hex --force && \
    mix archive.install hex phx_new 1.5.4 --force && \
    mix local.rebar --force


#RUN mkdir -p /opt/
COPY ./opt/init.sh /opt/init.sh
WORKDIR /opt/
#CMD ["/bin/bash"]
ENTRYPOINT ["init.sh"]
