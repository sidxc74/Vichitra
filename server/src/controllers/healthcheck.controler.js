
import { apiResponse } from "../utils/apiResponse.js";
import asyncHandler from '../utils/asyncHandler.js'
import { User } from "../models/user.models.js";
import { Vedio } from "../models/vedio.models.js";


const healthcheck = asyncHandler(async (req, res) => { 
    //TODO: build a healthcheck response that simply returns the OK status as json with a message
    return res
    .status(200)
    .json(new apiResponse(200,{},"Server is healthy!!"));
})


const search = async (req, res) => {
    try {
        const { query } = req.body;

        // Define a regex pattern for case-insensitive search
        const regex = new RegExp(query, 'i');

        // Search for matching users
        const users = await User.find({
            $or: [
                { username: { $regex: regex } },
                { fullName: { $regex: regex } },
                { email: { $regex: regex } }
            ]
        });

        // Search for matching videos
        const videos = await Vedio.find({
            $or: [
                { title: { $regex: regex } },
                { description: { $regex: regex } }
            ],
            isPublished: true // Optionally, filter only published videos
        });

        res.status(200).json({ success: true, users, videos });
    } catch (error) {
        console.error('Error searching users and videos:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};




export {
    healthcheck,
    search
    }
    