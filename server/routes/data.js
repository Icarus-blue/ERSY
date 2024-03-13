import { Router } from 'express'
import * as VideoController from '../controllers/data.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = Router()

router.get('/videos', VideoController.getMusicVideos)
router.get('/artists', VideoController.getArtistes)
router.get("/artists/:artist_id", VideoController.getArtist)
router.get('/albums', VideoController.getAlbums)
router.get('/gallery', VideoController.getGallery)
export default router