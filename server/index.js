import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import postRoutes from "./routes/posts.routes.js";
import { createPost } from "./controllers/posts.controllers.js"
import { register } from "./controllers/auth.controllers.js";
import { verifyToken } from "./middleware/auth.middleware.js";
import User from "./models/user.model.js";
import Post from "./models/post.model.js";
import { users, posts } from "./data/index.js";

/* CONFIG */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use("assets",express.static(path.join(__dirname,'public/assets')));

/* File Storage */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

  /* MONGOOSE SETUP */
  const PORT = process.env.PORT || 6001;
  const dbName = process.env.DB;
  // mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, }) //Connect Cloud Mongoose
  mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`) //Connect Local Mongoose Atlas
  .then(() => {
    app.listen(PORT, () => console.log(`✅ ✅ Server Port: ${PORT} ✅ ✅`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`⛔⛔ ${error} not connect ⛔⛔`));

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

// /* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);