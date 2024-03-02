import { Router } from 'express'
import * as VideoController from '../controllers/videos.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = Router()

router.get('/', VideoController.getMusicVideos)

export default router