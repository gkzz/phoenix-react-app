# 02 Usage

### Add resouces of `Message`
```
gkz@local ~/phoenix-react-app $ docker-compose exec app bash

root@app:/opt# cd api/

root@app:/opt/api# ls
README.md  _build  config  deps  lib  mix.exs  mix.lock  priv  test

root@app:/opt/api# mix phx.gen.json Chat Group groups name:string 

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


```
mix phx.gen.context Chat Message messages content:string
```


```
root@app:/opt/api# MIX_ENV=test && mix test
..warning: unused alias Group
  test/thanks_web/controllers/group_controller_test.exs:5

.......

Finished in 0.2 seconds
9 tests, 0 failures

Randomized with seed 424541
root@app:/opt/api# 
```

```
root@app:/opt/api# curl -H "Content-Type: application/json" -X POST -d '{"group": {"name": "first group"}}' http://localhost:4000/api/groups

root@app:/opt/api# curl -H "Content-Type: application/json" -X POST -d '{"group": {"name": "second group"}}' http://localhost:4000/api/groups
```

```
root@app:/opt/api# iex -S mix

iex(1)> Thanks.Chat.get_group!("45b5af64-3749-4fd1-b242-eab726936759")
%Thanks.Chat.Group{
  __meta__: #Ecto.Schema.Metadata<:loaded, "groups">,
  id: "45b5af64-3749-4fd1-b242-eab726936759",
  inserted_at: ~N[2020-08-16 08:26:11],
  messages: [],
  name: "first group",
  updated_at: ~N[2020-08-16 08:26:11]
}
```

```
iex(2)> Thanks.Chat.create_message(%{content: "first message", group_id: "45b5af64-3749-4fd1-b242-eab726936759"})
{:ok,
 %Thanks.Chat.Message{
   __meta__: #Ecto.Schema.Metadata<:loaded, "messages">,
   content: "first message",
   group: #Ecto.Association.NotLoaded<association :group is not loaded>,
   group_id: "45b5af64-3749-4fd1-b242-eab726936759",
   id: "c0892fa1-4373-4d95-8c08-6c43aaa0313f",
   inserted_at: ~N[2020-08-16 08:34:09],
   updated_at: ~N[2020-08-16 08:34:09]
 }}
```
```
iex(3)> Thanks.Chat.get_group!("45b5af64-3749-4fd1-b242-eab726936759")
%Thanks.Chat.Group{
  __meta__: #Ecto.Schema.Metadata<:loaded, "groups">,
  id: "45b5af64-3749-4fd1-b242-eab726936759",
  inserted_at: ~N[2020-08-16 08:26:11],
  messages: [
    %Thanks.Chat.Message{
      __meta__: #Ecto.Schema.Metadata<:loaded, "messages">,
      content: "first message",
      group: #Ecto.Association.NotLoaded<association :group is not loaded>,
      group_id: "45b5af64-3749-4fd1-b242-eab726936759",
      id: "c0892fa1-4373-4d95-8c08-6c43aaa0313f",
      inserted_at: ~N[2020-08-16 08:34:09],
      updated_at: ~N[2020-08-16 08:34:09]
    }
  ],
  name: "first group",
  updated_at: ~N[2020-08-16 08:26:11]
}
```