const express = require("express");
const app = express();
// Etheir be the enviroment variable PORT or will be 3000 if there is not enviroment
const port = process.env.PORT || 3000;
app.use(express.static("static"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
