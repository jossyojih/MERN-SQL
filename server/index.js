const express = require("express");
const app = express();
const cors = require('cors');
// Run sequelize init{rm migration n seeders}

const db = require("./models");

app.use(cors())
app.use(express.json());


// Routers
const postRouter = require("./routes/Posts");
const commentRouter = require("./routes/Comments");
const usersRouter = require("./routes/Users");
const likesRouter = require("./routes/Likes");
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/auth", usersRouter);
app.use("/likes", likesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
