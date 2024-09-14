const express = require('express');
const router = express.Router();
const { login, register, resetPassword } = require('../controllers/userController');


router.post('/login/:email/:password', login);

router.post('/register/:nombre/:apellido/:email/:password/:registroAcademico', register);

router.put('/reset-password/:email/:registroAcademico/:newPassword', resetPassword);

module.exports = router;
