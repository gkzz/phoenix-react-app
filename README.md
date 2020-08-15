# Phoenix React with App

Special Thanks to

- [Phoenix + Reactでチャットアプリを作ろう（Intro）](https://medium.com/@1zo/phoenix-react%E3%81%AE%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%9C%E3%82%8D%E3%81%86-intro-7dddee01850a)

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