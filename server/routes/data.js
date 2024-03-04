import { Router } from 'express'
import * as VideoController from '../controllers/data.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = Router()

router.get('/videos', VideoController.getMusicVideos)
router.get('/artists', VideoController.getArtistes)

export default router