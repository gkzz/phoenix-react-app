#!/bin/bash


docker-compose down -v
docker rmi $(docker images -a -q)
docker system prune && docker volume prune 
sudo rm -rf app/opt/api db/pgdata_store
mkdir db/pgdata_store

