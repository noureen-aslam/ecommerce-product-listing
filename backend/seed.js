const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    return seedProducts();
  })
  .catch(err => console.error("MongoDB connection error:", err));

async function seedProducts() {
  try {
    await Product.deleteMany();

    const products = [
      {
        name: "Elegant Long Blue Gown",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751723274/il_1080xN.4008102809_psvv_pnj2ab.webp",
        category: "Women’s Fashion",
        price: 3499,
        rating: 4.8
      },
      {
        name: "Velvet Bloom Maxi Gown",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724900/Velvet_Bloom_Maxi_Gown_hvw8t9.webp",
        category: "Dresses",
        price: 1899,
        rating: 4.5
      },
      {
        name: "Pastel Bliss Kurti Set",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724900/Pastel_Bliss_Kurti_Set_pu8920.jpg",
        category: "Ethnic Wear",
        price: 1499,
        rating: 4.2
      },
      {
        name: "Indigo Charm Anarkali",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724900/Indigo_Charm_Anarkali_urvqrn.webp",
        category: "Ethnic Wear",
        price: 1999,
        rating: 4.4
      },
      {
        name: "Urban Wrap Denim Jacket",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724899/Urban_Wrap_Denim_Jacket_bn2or2.webp",
        category: "Jackets",
        price: 999,
        rating: 4.1
      },
      {
        name: "Floral Frenzy Summer Dress",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724900/Floral_Frenzy_Summer_Dress_vitodj.jpg",
        category: "Dresses",
        price: 1299,
        rating: 4.3
      },
      {
        name: "Royal Quilted Sling Bag",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724899/Royal_Quilted_Sling_Bag_hqeyhc.webp",
        category: "Bags",
        price: 799,
        rating: 4.6
      },
      {
        name: "Pearl Mist Tote Bag",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724899/Pearl_Mist_Tote_Bag_jvnms8.webp",
        category: "Bags",
        price: 1199,
        rating: 4.2
      },
      {
        name: "Boho Vibe Round Handbag",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724901/Boho_Vibe_Round_Handbag_ucgttr.jpg",
        category: "Bags",
        price: 1099,
        rating: 4.4
      },
      {
        name: "Classic Tan Leather Satchel",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724898/Classic_Tan_Leather_Satchel_dcnjij.jpg",
        category: "Bags",
        price: 999,
        rating: 4.3
      },
      {
        name: "Sparkle Glimmer Wallet",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724898/Sparkle_Glimmer_Wallet_o7qe9l.webp",
        category: "Accessories",
        price: 599,
        rating: 4.1
      },
      {
        name: "Luxe Dial Women’s Watch",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724898/Luxe_Dial_Women_s_Watch_xktbkc.jpg",
        category: "Watches",
        price: 1599,
        rating: 4.7
      },
      {
        name: "CharmGlow Adjustable Bracelet",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724897/CharmGlow_Adjustable_Bracelet_pvdsb4.webp",
        category: "Jewellery",
        price: 499,
        rating: 4.0
      },
      {
        name: "Oxidized Jhumka Earrings",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724898/Oxidized_Jhumka_Earrings_edbjhv.webp",
        category: "Jewellery",
        price: 349,
        rating: 4.4
      },
      {
        name: "Crystal Drop Statement Ring",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724897/Crystal_Drop_Statement_Ring_b9k9bx.webp",
        category: "Jewellery",
        price: 299,
        rating: 4.3
      },
      {
        name: "Velvet Touch Wedge Heels",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724899/Velvet_Touch_Wedge_Heels_adt6ou.jpg",
        category: "Footwear",
        price: 1299,
        rating: 4.2
      },
      {
        name: "Beaded Mojari Slip-ons",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724898/Beaded_Mojari_Slip-ons_wqqe2s.webp",
        category: "Footwear",
        price: 899,
        rating: 4.1
      },
      {
        name: "Blush Touch Matte Lipstick",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724896/Blush_Touch_Matte_Lipstick_oppvwt.webp",
        category: "Beauty",
        price: 249,
        rating: 4.5
      },
      {
        name: "AromaGlow Scented Candle Set",
        image: "https://res.cloudinary.com/dp38hoelm/image/upload/v1751724892/AromaGlow_Scented_Candle_Set_vbu767.webp",
        category: "Home Decor",
        price: 599,
        rating: 4.8
      }
    ];

    await Product.insertMany(products);

    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}
