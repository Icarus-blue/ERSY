import expressAsyncHandler from "express-async-handler";
import client from "../utils/client.js";

export const getMusicVideos = expressAsyncHandler(async (req, res, next) => {
    const { page, pageSize, query } = req.query
    const videos = await client.videos.findMany({
        take: parseInt(pageSize),
        skip: (page - 1) * pageSize,
        distinct: ['title'],
        where: {
            title: {
                contains: query
            }
        }
    });

    res.status(200).json({
        status: true,
        videos: videos.filter((video, index, arr) => arr.indexOf(video) === index)
    })
})