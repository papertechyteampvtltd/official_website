// index.js
import express from "express";
import mongoose from "mongoose";
import Product from "./module/product.js";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));


const mongo_url = "mongodb://127.0.0.1:27017/Papertechy";

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(mongo_url);
    console.log("✅ Connected to database");
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
  }
}
main();



// Root route
app.get("/", (req, res) => {
  res.send("hii there");
});


//All Products route
app.get("/products", async (req,res)=>{
  const Products = await Product.find({});
  res.render("products/main" ,{ Products });
});

app.get("/products/new", async (req,res)=>{
  res.render("products/new");
});

// Single Product route
app.get("/products/:id", async (req,res)=>{
  const {id} = req.params;
  const product = await Product.findById(id);
  res.render("products/show" ,{product});
});


//New Product route
app.post("/products", async (req, res) => {
  // Convert comma-separated image URLs into an array
  const imagesArray = req.body.product_image_array
    ? req.body.product_image_array.split(",").map(url => url.trim())
    : undefined;

  // Create a new product
  const newProduct = new Product({
    title: req.body.name,
    description: req.body.description,
    price: req.body.price,
    amazon_redirect_url: req.body.amazon_link,
    product_image_array: imagesArray
  });

  await newProduct.save();
  res.redirect("/products");
});


// Start server
app.listen(3000, () => {
  console.log("🚀 Server is listening at http://localhost:3000");
});
