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