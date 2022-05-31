const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { 
    type: String,  
    required: true,
    trim: true,
    unique: true 
    },
  password: { type: String, required: true },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);