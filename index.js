const app = require("express")();

app.route("/").get((req, res) => {
  res.send("Silence is golsed");
});

app.listen((port = 4001), () => {
  console.log("Server rodando na porta:" + port);
});
