// init\data.js
const sampleProducts = [
    {
      title: "Wireless Earbuds",
      description: "Compact Bluetooth earbuds with high-quality sound and 20h battery.",
      price: 1999,
      amazon_redirect_url: "https://amzn.in/d/2yjHpwo",
      product_image_array: [
        "https://picsum.photos/200?random=1",
        "https://picsum.photos/200?random=2"
      ]
    },
    {
      title: "Gaming Mouse",
      description: "Ergonomic gaming mouse with RGB lighting and 16000 DPI sensor.",
      price: 1499,
      amazon_redirect_url: "https://amzn.in/d/mouse2",
      product_image_array: [
        "https://picsum.photos/200?random=3",
        "https://picsum.photos/200?random=4"
      ]
    },
    {
      title: "Mechanical Keyboard",
      description: "Backlit mechanical keyboard with blue switches for fast typing.",
      price: 3999,
      amazon_redirect_url: "https://amzn.in/d/keyboard3",
      product_image_array: [
        "https://picsum.photos/200?random=5",
        "https://picsum.photos/200?random=6"
      ]
    },
    {
      title: "Smart Watch",
      description: "Fitness tracking smartwatch with heart rate and sleep monitoring.",
      price: 4999,
      amazon_redirect_url: "https://amzn.in/d/watch4",
      product_image_array: [
        "https://picsum.photos/200?random=7",
        "https://picsum.photos/200?random=8"
      ]
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable waterproof Bluetooth speaker with deep bass.",
      price: 2999,
      amazon_redirect_url: "https://amzn.in/d/speaker5",
      product_image_array: [
        "https://picsum.photos/200?random=9",
        "https://picsum.photos/200?random=10"
      ]
    },
    {
      title: "Laptop Stand",
      description: "Aluminum adjustable laptop stand for desk setups.",
      price: 1299,
      amazon_redirect_url: "https://amzn.in/d/stand6",
      product_image_array: [
        "https://picsum.photos/200?random=11",
        "https://picsum.photos/200?random=12"
      ]
    },
    {
      title: "External SSD",
      description: "1TB portable SSD with fast USB-C connection.",
      price: 6999,
      amazon_redirect_url: "https://amzn.in/d/ssd7",
      product_image_array: [
        "https://picsum.photos/200?random=13",
        "https://picsum.photos/200?random=14"
      ]
    },
    {
      title: "Action Camera",
      description: "Waterproof 4K action camera with wide-angle lens.",
      price: 8999,
      amazon_redirect_url: "https://amzn.in/d/camera8",
      product_image_array: [
        "https://picsum.photos/200?random=15",
        "https://picsum.photos/200?random=16"
      ]
    },
    {
      title: "Power Bank",
      description: "20000mAh power bank with fast charging support.",
      price: 2499,
      amazon_redirect_url: "https://amzn.in/d/power9",
      product_image_array: [
        "https://picsum.photos/200?random=17",
        "https://picsum.photos/200?random=18"
      ]
    },
    {
      title: "LED Desk Lamp",
      description: "Adjustable LED desk lamp with touch control and USB port.",
      price: 999,
      amazon_redirect_url: "https://amzn.in/d/lamp10",
      product_image_array: [
        "https://picsum.photos/200?random=19",
        "https://picsum.photos/200?random=20"
      ]
    },
    {
      title: "Portable Projector",
      description: "Mini projector for home and office use, supports 1080p.",
      price: 5999,
      amazon_redirect_url: "https://amzn.in/d/projector11",
      product_image_array: [
        "https://picsum.photos/200?random=21",
        "https://picsum.photos/200?random=22"
      ]
    },
    {
      title: "Noise Cancelling Headphones",
      description: "Over-ear headphones with ANC and 30h battery.",
      price: 7999,
      amazon_redirect_url: "https://amzn.in/d/headphones12",
      product_image_array: [
        "https://picsum.photos/200?random=23",
        "https://picsum.photos/200?random=24"
      ]
    },
    {
      title: "Smartphone Gimbal",
      description: "3-axis gimbal stabilizer for smooth mobile video shooting.",
      price: 5999,
      amazon_redirect_url: "https://amzn.in/d/gimbal13",
      product_image_array: [
        "https://picsum.photos/200?random=25",
        "https://picsum.photos/200?random=26"
      ]
    },
    {
      title: "Fitness Tracker Band",
      description: "Waterproof smart band with step count and sleep tracking.",
      price: 1799,
      amazon_redirect_url: "https://amzn.in/d/band14",
      product_image_array: [
        "https://picsum.photos/200?random=27",
        "https://picsum.photos/200?random=28"
      ]
    },
    {
      title: "Coffee Maker",
      description: "Automatic coffee machine with grinder and frother.",
      price: 8999,
      amazon_redirect_url: "https://amzn.in/d/coffee15",
      product_image_array: [
        "https://picsum.photos/200?random=29",
        "https://picsum.photos/200?random=30"
      ]
    },
    {
      title: "Portable Monitor",
      description: "15.6-inch portable monitor with USB-C input.",
      price: 10999,
      amazon_redirect_url: "https://amzn.in/d/monitor16",
      product_image_array: [
        "https://picsum.photos/200?random=31",
        "https://picsum.photos/200?random=32"
      ]
    },
    {
      title: "Smart Bulb",
      description: "WiFi-enabled RGB smart bulb compatible with Alexa/Google.",
      price: 699,
      amazon_redirect_url: "https://amzn.in/d/bulb17",
      product_image_array: [
        "https://picsum.photos/200?random=33",
        "https://picsum.photos/200?random=34"
      ]
    },
    {
      title: "VR Headset",
      description: "Immersive VR headset compatible with multiple devices.",
      price: 12999,
      amazon_redirect_url: "https://amzn.in/d/vr18",
      product_image_array: [
        "https://picsum.photos/200?random=35",
        "https://picsum.photos/200?random=36"
      ]
    },
    {
      title: "Robot Vacuum Cleaner",
      description: "Smart vacuum cleaner with auto-charging and mapping.",
      price: 15999,
      amazon_redirect_url: "https://amzn.in/d/vacuum19",
      product_image_array: [
        "https://picsum.photos/200?random=37",
        "https://picsum.photos/200?random=38"
      ]
    },
    {
      title: "Electric Kettle",
      description: "1.5L stainless steel electric kettle with auto shut-off.",
      price: 1299,
      amazon_redirect_url: "https://amzn.in/d/kettle20",
      product_image_array: [
        "https://picsum.photos/200?random=39",
        "https://picsum.photos/200?random=40"
      ]
    }
  ];
  
export default sampleProducts;