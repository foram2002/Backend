const express = require('express');
const router = express.Router();

// Controller import
const userController = require('../controller/UserController');

// Routes

router.get('/test', userController.testuser);
// http://localhost:5000/userapi/reguser
router.post('/reguser', userController.reguser);


// http://localhost:5000/userapi/loguser
router.post('/loguser',userController.loginuser)


module.exports = router;
