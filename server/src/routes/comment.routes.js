
import { Router } from "express";

import {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
} from "../controllers/comment.controler.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();


router.route("/:videoId").get(getVideoComments)

router.use(verifyJWT)

router.route("/:videoId").post(addComment);
router.route("/c/:commentId").delete(deleteComment).patch(updateComment);

export default router;
