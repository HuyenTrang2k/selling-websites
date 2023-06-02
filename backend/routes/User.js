const userController = require('../controllers/UserController');
const router = require('express').Router();

//get all users
router.get("/", userController.getAllUsers);

// get users
router.get("/:id", userController.getUser);

//delete user
router.delete("/:id" ,userController.deleteUser);

//update user
router.put("/:id" ,userController.updateUser);

//get new user
router.get('/new', userController.getNewUser);

module.exports = router;
