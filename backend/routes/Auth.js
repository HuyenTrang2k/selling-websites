const authController = require('../controllers/AuthController');
const authMiddleware = require('../middleWare/authMiddleware');
const router = require('express').Router();

//register
router.post('/register', authController.registerUser);

//login
router.post('/login', authController.loginUser);

//refresh
router.post('/refresh', authController.requestRefreshToken);

//forgot-password
router.post('/forgot-password', authController.forgotPassword);

//forgot-password
router.post('/reset-password', authController.resetPassword);

//logout
router.post('/logout', authMiddleware.verifyToken, authController.logoutUser);

module.exports = router;