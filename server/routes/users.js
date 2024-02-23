import express from 'express';
import * as userController from '../controllers/User.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js';
import upload from '../utils/multer.js';
const router = express.Router();


router.post('/', userController.createUser)
router.get('/profile', verifyToken, userController.getUserProfile)
router.post('/send-password-reset-code', userController.sendPasswordResetCode)
router.post('/check-code', userController.checkCode)
router.post('/reset-password', userController.changePassword)
router.put('/user', verifyToken, userController.updateProfile)
router.put('/user/:userId/update-profile-picture', verifyToken, upload.single('profile'), userController.uploadProfilePicture)

export default router;
