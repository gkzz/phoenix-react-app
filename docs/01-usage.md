# 01 Usage

### Clone this repository
```
gkz@local $ git clone https://github.com/gkzz/phoenix-react-app.git
gkz@local $ cd phoenix-react-app
```

### Modify dotenv based on app/.env.tmpl or db/.env.tmpl
```
gkz@local $ cat app/.env.tmpl app/.env
gkz@local $ cat app/.env.tmpl app/.env
```

### Make directory, `db/pgdata_store`

```
gkz@local $ mkdir db/pgdata_store
gkz@local $ tree -L 2
.
├── app
│   ├── Dockerfile
│   ├── Dockerfile.init
│   └── opt
├── db
│   ├── docker-entrypoint-initdb.d
│   ├── Dockerfile
│   └── pgdata_store
├── docker-compose-init.yml
├── docker-compose.yml
├── README.md
└── sh
    └── new.sh

6 directories, 7 files
```

### Execute `docker-compose run with mix phx.new` command
```
gkz@local ~/phoenix-react-app $ . sh/new.sh

gkz@local ~/phoenix-react-app $ docker-compose ps
Name              Command              State            Ports         
----------------------------------------------------------------------
db     docker-entrypoint.sh postgres   Up      0.0.0.0:15432->5432/tcp
```

### Change owner/owner group `phoenix/opt/api`
```
gkz@local ~/phoenix-react-app $ sudo chown -R ${YOURNAME}:${YOURNAME} phoenix/opt/api
```

### Modify `app/opt/api/config/dev.exs`
```
gkz@local ~/phoenix-react-app $ cat app/opt/config/dev.exs.tmpl > app/opt/api/config/dev.exs 

gkz@local ~/phoenix-react-app $ tail app/opt/api/config/dev.exs
# Configure your database
config :chat_app, ChatApp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("PHX_DB_USERNAME"),
  password: System.get_env("PHX_DB_PASSWORD"),
  database: System.get_env("PHX_DB"),
  hostname: System.get_env("DB_HOST"),
  show_sensitive_data_on_connection_error: true,
  pool_size: 10
```

### Execute `docker-compose up -d (with docker-compose.yml)`
```
gkz@local ~/phoenix-react-app $ docker-compose up -d
Creating volume "phoenix-react-app_postgresdata" with local driver
db is up-to-date
Creating app ... done

gkz@local ~/phoenix-react-app $ docker-compose ps
Name              Command              State            Ports         
----------------------------------------------------------------------
app    /bin/bash                       Up      0.0.0.0:4000->4000/tcp 
db     docker-entrypoint.sh postgres   Up      0.0.0.0:15432->5432/tcp 
```


## Try to connect db from app
```
$ docker-compose exec app bash
root@app:/opt# psql -U phx -d thanks_dev -h db -p 5432
Password for user phx: 
psql (11.7 (Debian 11.7-0+deb10u1), server 12.4 (Debian 12.4-1.pgdg100+1))
WARNING: psql major version 11, server major version 12.
         Some psql features might not work.
Type "help" for help.

thanks_dev=> \l
                                 List of databases
    Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   
------------+----------+----------+------------+------------+-----------------------
 postgres   | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 template0  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
            |          |          |            |            | postgres=CTc/postgres
 template1  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
            |          |          |            |            | postgres=CTc/postgres
 thanks_dev | phx      | UTF8     | en_US.utf8 | en_US.utf8 | =Tc/phx              +
            |          |          |            |            | phx=CTc/phx
(4 rows)
```

```
root@app:/opt/api# MIX_ENV=test && mix test
==> connection
Compiling 1 file (.ex)
Generated connection app

Finished in 0.03 seconds
2 tests, 0 failures

Randomized with seed 312970
```