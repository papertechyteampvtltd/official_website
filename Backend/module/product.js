import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "Product Description"
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  amazon_redirect_url: {
    type: String,
  },
  product_image_array: {
    type: [String],
    default: [
      "https://tse1.mm.bing.net/th/id/OIP.mzUx0B289d3VftbwXNiPbgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.ViwjyikoP973HQKiwwR0hgHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
    ]
  }
});

export default mongoose.model("Product", productSchema);
