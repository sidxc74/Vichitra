import mongoose from "mongoose";
import { User } from "../models/user.models.js";
import { Vedio } from "../models/vedio.models.js";
import apiError from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { deleteOnClodinary, uplaodOnCloudinary } from "../utils/cloudinary.js";
import { Like } from "../models/like.models.js";



const getAllVideos = asyncHandler(async(req,res) => {


    const { page = 1, limit = 10, query, sortBy, sortType } = req.query
    



   
    // console.log(query,typeof query);
    
    const pipline = []

    if(query){
        pipline.push({
            $match:{
               isPublished:false
            }
        })
    }

    let createFeiild = {}
    if(sortBy && sortType){
        createFeiild[sortBy] = sortType === "asc" ?1:-1
        
        pipline.push({
            $sort:createFeiild
        })
    }
    else{
        createFeiild["createdAt"] =-1
        
        pipline.push({
            $sort:createFeiild
        })
    }

    pipline.push({
        $skip: (page - 1) * limit
    });
    pipline.push({
        $limit: limit
    });

    pipline.push({
        $lookup: {
            from: "users", // Assuming your user collection is named 'users'
            localField: "owner",
            foreignField: "_id",
            as: "ownerInfo"
        }
    });

    pipline.push({
        $addFields: {
            "owner": { $arrayElemAt: ["$ownerInfo", 0] }
        }
    });

    pipline.push({
        $project: {
            ownerInfo: 0 // Remove the ownerInfo field from the response
        }
    });
    // console.log(pipline);
    /*
    [
  { '$match': { owner: new ObjectId('65e0782461c4addc4efa7528') } },  
  { '$match': { isPublished: false } },
  { '$sort': { isPublished: 1 } },
  { '$skip': 0 },
  { '$limit': 10 }
] */

   const allVedios =  await Vedio.aggregate(pipline)
   if(!allVedios){
    throw new apiError(400,"pipline aggreagtion problem")
   }

   res.status(200).json(
    new apiResponse(
        200,
        allVedios,
        `all vedios are here count:${allVedios.length}` 
    )
   )
      
      
})






const getAllVideosUser = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination

console.log("here getting")

    if(!userId){
        throw new apiError(400,"userid required")
    }

    const pipline = []
    if(userId){
        await User.findById(userId)

        pipline.push({
            $match:{
                owner: new mongoose.Types.ObjectId(userId),   
            }
        })
    }
    console.log(query,typeof query);
    

    if(query){
        pipline.push({
            $match:{
               isPublished:false
            }
        })
    }

    let createFeiild = {}
    if(sortBy && sortType){
        createFeiild[sortBy] = sortType === "asc" ?1:-1
        
        pipline.push({
            $sort:createFeiild
        })
    }
    else{
        createFeiild["createdAt"] =-1
        
        pipline.push({
            $sort:createFeiild
        })
    }

    pipline.push({
        $skip: (page - 1) * limit
    });
    pipline.push({
        $limit: limit
    });
    console.log(pipline);
    /*
    [
  { '$match': { owner: new ObjectId('65e0782461c4addc4efa7528') } },  
  { '$match': { isPublished: false } },
  { '$sort': { isPublished: 1 } },
  { '$skip': 0 },
  { '$limit': 10 }
] */

   const allVedios =  await Vedio.aggregate(pipline)
   if(!allVedios){
    throw new apiError(400,"pipline aggreagtion problem")
   }

   res.status(200).json(
    new apiResponse(
        200,
        allVedios,
        `all vedios are here count:${allVedios.length}` 
    )
   )


})

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get video, upload to cloudinary, create video

    

    if(!(title && description))
    {
        throw new apiError(400,"user should provide title and discription")
    }

    // console.log(req.files.vedio);
    // console.log(req.files.thumbnail);

    const vedioUrl = req.files?.vedio[0]?.path
    const thumbnailUrl = req.files?.thumbnail[0]?.path

    if(!vedioUrl){
        throw new apiError(400,"vedio path is required")
    }
    if(!thumbnailUrl){
        throw new apiError(400,"thumbnail path is required")
    }

    const vedio = await uplaodOnCloudinary(vedioUrl)
    const thumbnail = await uplaodOnCloudinary(thumbnailUrl)
    console.log(vedio);


    const vedioData = await Vedio.create({
        vedioFile:vedio?.url,
        thumbnail:thumbnail?.url,
        owner:req.user?._id,  
        title:title,
        description:description,
        // duration:vedio.duration,
        duration:vedio?.duration,
        views:0,
        isPublished : true,
    })
    return res.status(200).json(
        new apiResponse(
            200,
            vedioData,
            "Vedio published succcessfully"

        )
    )


})




 // Assuming you've imported your Vedio model

const incrementVideoViews = asyncHandler( async (req, res) => {
  const { videoId } = req.params;

  try {
    // Find the video by ID and increment its views
    const video = await Vedio.findByIdAndUpdate(videoId, { $inc: { views: 1 } });

    if (!video) {
      return res.status(404).json({ success: false, message: "Video not found" });
    }

    res.status(200).json({ success: true, message: "Views incremented successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});




const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id


   const userVedio = await Vedio.findById(videoId)
//    console.log(userVedio?.owner.toString());
//    console.log(req.user?._id.toString());

//    if(!userVedio || ((!userVedio.isPublished) && (!userVedio.owner === req.user._id))){
//     throw new apiError(400,"vedio ur seacrching for doesnot exist")
//    }



   return res.status(200).json(
    new apiResponse(
        200,
        userVedio,
        "vedio found successfullly"
    )
   )

})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail
 

    const myVedio = await Vedio.findById(videoId)

    if(!myVedio ||!(myVedio.owner.toString() === req.user._id.toString())){
        throw new apiError(400,"Cannot find the vedio")
    }

    const {title,description} = req.body;

    const thumbnail = await req.file?.path
    
    if(!(title && description))
    {
        throw new apiError(400," title and discription required for updation")
    }
    
    if(!thumbnail){
        throw new apiError(400,"for update thumbnail is required")
    }

    const updatedthumbnail = await uplaodOnCloudinary(thumbnail)
    await deleteOnClodinary(myVedio.thumbnail)
   const newVedio =  await Vedio.findByIdAndUpdate(videoId
        ,
        {
            $set:{
                title:title,
                description:description,
                thumbnail:updatedthumbnail?.url
            }
        },
        {
            new:true,
        })

        return res.status(200).json(
            new apiResponse(
                200,
                newVedio,
                "updated successfully"
            )
        )


})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
    
    if(!videoId){
        throw new apiError(400,"Cannot find the vedioid")
    }
    const deleteVedio =  await Vedio.findById(videoId)
    if(!deleteVedio || !(deleteVedio.owner.toString() === req.user._id.toString())){
        throw new apiError(400,"Cannot find the vedio")
    }
    console.log(deleteVedio.vedioFile);

    await deleteOnClodinary(deleteVedio.vedioFile)

   await Vedio.findByIdAndDelete(videoId)

        
        return res.status(200).json(
            new apiResponse(
                200,
                "updated successfully"
            )
        )

    
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params

    if(!videoId){
        throw new apiError(400,"id not accessable")
    }

    const vedioExisted =  await Vedio.findById(videoId)
    if(!vedioExisted){
        throw new apiError(400,"Vedio doesnot existed")}


     if(!vedioExisted.owner == req.user?._id)
    {   throw new apiError(400,"Not allowed to toggle")
    }
    console.log(vedioExisted.isPublished );
    vedioExisted.isPublished = ! vedioExisted.isPublished
   await vedioExisted.save({validateBeforeSave: false})
    // console.log( vedioExisted.isPublished);

    return res.status(200).json(
        new apiResponse(
            200,
            vedioExisted.isPublished ,
            "check published or not"

        )
    )

})

export {
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus,
    getAllVideosUser,
    getAllVideos,
    incrementVideoViews
}