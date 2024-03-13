import expressAsyncHandler from "express-async-handler";
import client from "../utils/client.js";
import { getArtistById, getArtistByName, getArtistsSongs } from "../services/dataService.js";

const generateWhere = (query, album_id) => {

    return { ...where }
}

export const getMusicVideos = expressAsyncHandler(async (req, res, next) => {

    const { page, pageSize, query, album_id } = req.query

    let where = {};

    if (query) {
        where.title = {
            contains: query
        };
    }

    if (album_id) {
        where.album_id = parseInt(album_id);
    }


    const videos = await client.videos.findMany({
        take: parseInt(pageSize),
        skip: (page - 1) * pageSize,
        distinct: ['title'],
        where
    });

    res.status(200).json({
        status: true,
        videos
    })
})

export const getArtistes = expressAsyncHandler(async (req, res, next) => {

    const { page, pageSize, query } = req.query
    // const where = generateWhere(query)
    let where = {
        name_: {
            not: '0'
        }
    };

    if (query) {
        where.name_ = {
            contains: query
        };
    }
    console.log('where', where)
    const artistes = await client.artistes.findMany({
        take: parseInt(pageSize),
        skip: (page - 1) * pageSize,
        distinct: ['id_'],
        where: where

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


export const getAlbums = expressAsyncHandler(async (req, res, next) => {
    const { page, pageSize, query } = req.query
    const albums = await client.albums.findMany({
        take: parseInt(pageSize),
        skip: (page - 1) * pageSize,
        distinct: ['name_'],
        where: {
            name_: {
                contains: query,
                not: 'Other'
            }
        }
    });


    res.status(200).json({
        status: true,
        albums: albums.filter((album, index, arr) => arr.indexOf(album) === index)
    })
})


export const getGallery = expressAsyncHandler(async (req, res, next) => {

})