defmodule Thanks.Chat do
  import Ecto.Query, warn: false
  alias Thanks.Repo
  alias Thanks.Chat.Group

  def list_groups do
    Repo.all(Group)
  end

  def get_group!(id) do
    Repo.get!(Group, id)
    |> Repo.preload(:messages)
  end

  def create_group(attrs \\ %{}) do
    %Group{}
    |> Repo.preload(:messages)
    |> Group.changeset(attrs)
    |> Repo.insert()
  end

  alias Thanks.Chat.Message

  def get_message!(id), do: Repo.get!(Message, id)

  def create_message(attrs \\ %{}) do
    %Message{}
    |> Message.changeset(attrs)
    |> Repo.insert()
  end
end
