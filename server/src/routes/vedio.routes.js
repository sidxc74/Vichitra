import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

import { 
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus,
    getAllVideos,
    getAllVideosUser,
    incrementVideoViews

} from "../controllers/vedio.controler.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();


router.route('/getallvideos').get(getAllVideos)
router.route('/getavideo/:videoId').get(getVideoById)
router.route('/increaseViews/:videoId').patch(incrementVideoViews) 


router.use(verifyJWT);
router.route('/').get(getAllVideosUser).post(upload.fields([
    {
        name:"vedio",
        maxCount:1
    },
    {
        name:"thumbnail",
        maxCount:1
    }
]),publishAVideo)
                 

router.route('/:videoId').patch(upload.single("thumbnail"),updateVideo)
                         .delete(deleteVideo)

                        

router.route('/toggle/publish/:videoId').get(togglePublishStatus)
export default router 
