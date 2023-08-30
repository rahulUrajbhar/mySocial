const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("Connected to MongoDB");
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
