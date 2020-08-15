#!/bin/sh

#cd api && \
#  mix ecto.create && \
#  mix ecto.migrate && \
#  mix test && \
#  mix phx.server

cd api && \
  mix ecto.create && \
  mix ecto.migrate

#cd api && \
#  mix ecto.create && \
#  mix ecto.migrate && \
#  mix phx.gen.json \
#    Chat Group groups name:string && \
#  mix ecto.migrate