

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {   toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos,
    getAllLikesForVideo} from "../controllers/like.controler.js"

const router = Router();


router.route('/allvideolikes/:videoId').get(getAllLikesForVideo);

router.use(verifyJWT)

router.route("/videos").get(getLikedVideos);
router.route("/toggle/t/:tweetId").post(toggleTweetLike);
router.route("/toggle/c/:commentId").post(toggleCommentLike);
router.route("/toggle/v/:videoId").post(toggleVideoLike);

export default router;


