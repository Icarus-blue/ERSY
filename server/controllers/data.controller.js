import expressAsyncHandler from "express-async-handler";
import client from "../utils/client.js";
import { getArtistById, getArtistByName, getArtistsSongs } from "../services/dataService.js";

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

export const getArtistes = expressAsyncHandler(async (req, res, next) => {
    const { page, pageSize, query } = req.query
    const artistes = await client.artistes.findMany({
        take: parseInt(pageSize),
        skip: (page - 1) * pageSize,
        distinct: ['id_'],
        where: {
            name_: {
                contains: query,
                not: "0"
            },
            nick_names: {
                contains: query
            },
        }
    })

    res.status(200).json({
        status: true,
        artists: artistes.filter((artist, index, arr) => arr.indexOf(artist) === index)
    })
})


export const getArtist = expressAsyncHandler(async (req, res, next) => {
    const { artist_id } = req.params
    const artist = await getArtistByName(artist_id);
    if (!artist) return next({ message: 'artist could not be found', status: 404 })

    // let artistSongs = await getArtistsSongs(artist.id_)

    res.status(200).json({
        status: true,
        artist,
        // songs: artistSongs
    })
})