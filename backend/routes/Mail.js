const sendMailController = require('../controllers/sendMailController');
const router = require('express').Router();


router.post("/send", sendMailController.sendMail);
router.post("/contact", sendMailController.sendContact);

module.exports = router;
