const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/signup', authController.signup);
router.post('/verify', authController.verify);
router.post('/resend-otp', authController.resendOTP);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
