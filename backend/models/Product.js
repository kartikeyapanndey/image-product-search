const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  tags: [String],
  category: String,
});

productSchema.index({ tags: 'text', description: 'text', name: 'text' });

module.exports = mongoose.model('Product', productSchema);