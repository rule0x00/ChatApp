const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(express.json()); //cors
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res, next) => {
  const { username } = req.body;
  try {
    const resp = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "6ccf4713-9c9f-4a25-a577-9eef55fe4f54" },
      }
    );
    return res.status(resp.status).json(resp.data);
  } catch (error) {
    return res.json(error.message);
  }
});

app.listen(3000);
