require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

// Connection success event
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected Successfully...");
});

// Connection error event
mongoose.connection.on("error", (error) => {
  console.log(`MongoDB Connection Error: ${error}`);
});

module.exports = mongoose;
