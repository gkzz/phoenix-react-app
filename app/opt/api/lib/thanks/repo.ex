defmodule Thanks.Repo do
  use Ecto.Repo,
    otp_app: :thanks,
    adapter: Ecto.Adapters.Postgres
end
