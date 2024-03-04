import client from "../utils/client"

export const getArtistById = async (id) => {

    try {
        const artist = await client.artistes.findFirst({
            where: {
                id_: id
            }
        })

        return artist;
    } catch (error) {
        throw new Error(error)
    }
}


export const getArtistsSongs = async (artist_id) => {
    try {
        const songs = await client.artists_videos.findMany({
            where: {
                artist_id: artist_id
            }
        })

        return songs
    } catch (error) {
        throw new Error(error)
    }
}