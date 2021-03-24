const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1161859",
  key: "your_key",
  secret: "your_secret_key",
  cluster: "eu",
  useTLS: true,
});

pusher.trigger("my-channel", "my-event", {
  message: "memes",
});
