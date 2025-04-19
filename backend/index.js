const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv")
dotenv.config()


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
        headers: { "private-key": process.env.chat_engine_api  },
      }
    );
    return res.status(resp.status).json(resp.data);
  } catch (error) {
    return res.json(error.message);
  }
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});