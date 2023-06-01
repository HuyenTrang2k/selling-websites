const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');


const CartController = {
  getCart: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      return res.status(200).json(cart);
    }
    catch (err) {
      return res.status(500).json(err);
    }
  },
  //get cart by user id
  getCartByUserId: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const cart = await Cart.findById(user.cart);
      return res.status(200).json(cart);
    }
    catch (err) {
      return res.status(500).json(err);
    }
  },
  addToCart: async (req, res) => {
    try {
      const { id: userId, productId } = req.params;
      const newQuantity = req.body.quantity;
  
      const user = await User.findById(userId);
      const cart = await Cart.findById(user.cart);
      let { products } = cart;
      let productExists = false;
  
      console.log(products);
      
      for (const element of products) {
        if (element.productId == productId) {
          productExists = true;
          element.quantity += newQuantity;
          break;
        }
      }
  
      if (!productExists) {
        const product = await Product.findById(productId);
        if (product) {
          const { _id, name, image, price } = product;
          products.push({
            productId: _id,
            quantity: newQuantity,
            name,
            image,
            price,
          });
        }
      }
  
      cart.products = products;
  
      await cart.save();
  
      return res.status(200).json(cart);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
,  

  changeQuantity: async (req, res) => {
    try {
      const { id: userId, productId } = req.params;
      const newQuantity = req.body.quantity;

      const user = await User.findById(userId);
      const cart = await Cart.findById(user.cart);
      let { products } = cart;
      let productExists = false;

      for (const element of products) {
        if (element.productId == productId) {
          productExists = true;
          element.quantity = newQuantity;
          break;
        }
      }

      if (!productExists) {
        return;
      }

      cart.products = products;
      console.log(products)
      await cart.save();

      return res.status(200).json(cart);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  removeFromCart: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { productId } = req.params;
      const cart = await Cart.findById(user.cart);
      const { products } = cart;

      const newproducts = products.filter(product => product._id.toString() !== productId.toString());
      cart.products = newproducts;

      await cart.save();
      return res.status(200).json(cart);
    } catch (err) {
      return res.status(500).json(err);
    }
  },


  clearCart: async (req, res) => {
    try {
      const { userId } = req.body;

      const user = await User.findById(userId);
      const cart = await Cart.findById(user.cart);

      cart.products = []; // Xóa toàn bộ sản phẩm trong giỏ hàng

      await cart.save();
      return res.status(200).json(cart);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

}

module.exports = CartController;