# Phoenix React with App

Special Thanks to

- [Phoenix + Reactでチャットアプリを作ろう（Intro）](https://medium.com/@1zo/phoenix-react%E3%81%AE%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%82%A2%E3%83%97%E3%83%AA%E3%82%92%E4%BD%9C%E3%82%8D%E3%81%86-intro-7dddee01850a)


## TL;DR

On Editing

## Technologies used

- Docker Host (on local)
  - Ubuntu 20.04.1 LTS (Focal Fossa)
  - docker 19.03.3
  - docker-compose 1.24.1

- Docker Container (for app)
  - Elixir 1.10.4
  - Phoenix 1.5.4
  - node 10.21.0 

- Docker Container (for database)
  - PostgreSQL 12.4 (Debian 12.4-1.pgdg100+1)

## Usage

- [01-usage.md](docs/01-usage.md)

- [02-usage.md](docs/02-usage.md)

## Notes

- Before executing `. sh/new.sh`
```
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

## License
Copyright (c) 2020 [Ress](https://ress.mit-license.org/2020)

Licensed under the [MIT license](LICENSE).

Unless attributed otherwise, everything is under the MIT licence. 
Some stuff is not from me, and without attribution, and I no longer remember where I got it from. 
I apologize for that.
