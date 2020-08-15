# 02 Usage

### Add resouces of `Message`
```
$ docker-compose exec app bash
root@app:/opt# cd api/
root@app:/opt/api# ls
README.md  _build  config  deps  lib  mix.exs  mix.lock  priv  test
```

```
root@app:/opt/api# mix phx.gen.context Chat Message messages content:string

* creating lib/thanks_web/controllers/group_controller.ex
* creating lib/thanks_web/views/group_view.ex
* creating test/thanks_web/controllers/group_controller_test.exs
* creating lib/thanks_web/views/changeset_view.ex
* creating lib/thanks_web/controllers/fallback_controller.ex
* creating lib/thanks/chat/group.ex
* creating priv/repo/migrations/20200815074929_create_groups.exs
* injecting lib/thanks/chat.ex
* injecting test/thanks/chat_test.exs
```