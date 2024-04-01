
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist

} from "../controllers/playlist.controler.js"

const router = Router()

router.use(verifyJWT)

router.route('/').post(createPlaylist)
                 
router.route('/:playlistId').patch(updatePlaylist)
                 .delete(deletePlaylist)
                 .get(getPlaylistById)

router.route('/add/:videoId/:playlistId').patch(addVideoToPlaylist)
router.route('/remove/:videoId/:playlistId').patch(removeVideoFromPlaylist)
router.route('/user/:userId').get(getUserPlaylists)




export default router