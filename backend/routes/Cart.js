const CartController = require('../controllers/CartController');
const router = require('express').Router();

// Get cart
router.get('/:id', CartController.getCartByUserId);

// Add to cart
router.post('/:id/:productId', CartController.addToCart);

// Remove from cart
router.delete('/:id/:productId', CartController.removeFromCart);
//update quantity
router.put('/:id/:productId', CartController.changeQuantity);
// Clear cart
router.post('/clear', CartController.clearCart);

module.exports = router;

