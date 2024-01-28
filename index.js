import express from "express";
import fs from "fs";
import multer from "multer";
import mongoose from "mongoose";
import cors from "cors";
import {
  registerValidator,
  loginValidator,
} from "./validations/validations.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import { login, register } from "./controllers/UserControllers.js";
import { checkAuth } from "./utils/auth.js";
import {
  getPizzas,
  getPizzasId,
  getRoundPizzas,
  patchPizzas,
  postPizzas,
} from "./controllers/ItemsControllers.js";

const app = express();
mongoose
  .connect(
    "mongodb+srv://makar2211:Makar22112004@cluster1.by07dkl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("Error DB", err));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

//authorization
app.post("/auth/register", registerValidator, handleValidationErrors, register);
app.post(
  "/auth/login",
  checkAuth,
  loginValidator,
  handleValidationErrors,
  login
);

//items
app.post("/pizzas", upload.single("image"), postPizzas);
app.get("/pizzas", getPizzas);
app.get("/pizzas/:id", getPizzasId);
app.patch("/pizzas/:id", patchPizzas);
app.get("/pizzas/krugla-pitsa", getRoundPizzas);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server ok");
});
