const OrderController = require('../controllers/OrderController');

const router = require('express').Router();

//get orders
router.get('/', OrderController.getOrders);

//get order
router.get('/:id', OrderController.getOrder);

//create order
router.post('/:userId', OrderController.createOrder);

//update order
router.put('/:id', OrderController.updateOrder);

module.exports = router;