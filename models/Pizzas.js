import mongoose from "mongoose";

const PizzasSchema = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  new: {
    type: Number,
    require: true,
  },
  popular: {
    type: Number,
    require: true,
  },
  size: {
    type: String,
    require: true,
  },
  recommended: {
    type: Boolean,
    require: true,
  },
});

export default mongoose.model("Pizzas", PizzasSchema);
