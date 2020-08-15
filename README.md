# Phoenix React with App



```
gkz@local ~/phoenix-react-app $ . sh/new.sh
```


```
gkz@local ~/phoenix-react-app $ sudo chown -R ${YOURNAME}:${YOURNAME} phoenix/opt/api


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

```
gkz@local ~/phoenix-react-app $ docker-compose up -d
```