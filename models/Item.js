const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  country: { type: String, default: "Indonesia" },
  isPopular: { type: Boolean },
  city: { type: String, required: true },
  imageId: [{ type: ObjectId, ref: "Image" }],
  featureId: [{ type: ObjectId, ref: "Feature" }],
  activityId: [{ type: ObjectId, ref: "Activity" }],
});

module.exports = mongoose.model("Item", itemSchema);
