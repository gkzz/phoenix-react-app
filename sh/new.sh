#!/bin/bash
docker-compose -f docker-compose-init.yml \
  run app \
  mix phx.new api \
  --app thanks \
  --module Thanks \
  --binary-id \
  --no-html \
  --no-webpack
