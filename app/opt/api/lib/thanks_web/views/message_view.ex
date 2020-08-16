defmodule ThanksWeb.MessageView do
  use ThanksWeb, :view


  def render("message.json", %{message: message}) do
    %{id: message.id,
      content: message.content}
  end
end
