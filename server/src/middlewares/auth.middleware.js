import { User } from "../models/user.models.js";
import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"


export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
       


        const token = await req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log("token",token)
        if (!token) {
            throw new apiError(401, "Unauthorized request")
        }
    
  
    
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decode?._id).select("-password -refreshToken")
        if (!user) {
            throw new apiError(401, "invalid Access Token")
        }
    
        req.user = user;
        next();
    } catch (error) {
        throw new apiError(401,error?.message || "invalid access token")
    }
})