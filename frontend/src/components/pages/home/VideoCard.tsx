import Image from 'next/image'
import React from 'react'
import PlayButton from './PlayButton'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setVideoId } from '@/redux/features/modalSlice';

type Props = {
    img: string;
    title: string;
    id_: string;
    artist_id: string;
    artist_name?: string;
    artist_url: string;
    feat_artists: string;
    video_id: string;
    uploader: string;
    release_date: Date;
    added_date: Date;
    category: string;
    views: string;
}

function VideoCard({ img, title, video_id }: Props) {
    const dispatch = useDispatch()
    return (
        <div className="moods__item play-button-container" data-bs-toggle='modal'
            onClick={() => {
                dispatch(setVideoId(video_id))
            }}
            data-bs-target="#playVideoModal">
            <div className="thumb mb-16 ralt transition overhid">
                <Image
                    width={200}
                    height={400}
                    src={`https://img.youtube.com/vi/${video_id}/${'sddefault.jpg' || 'hqdefault.jpg' || 'maxresdefault.jpg' || 'default.jpg'}`}
                    className="w-100  transition overhid h-auto"
                    alt="img"
                />
                <PlayButton
                    audioTrack={false}
                    isPlaying={true}
                    onClick={() => { }}
                />
            </div>
            <div className="content">
                <h5 className="mb-2">
                    <Link href={`https://youtube.com/watch?v=${video_id}`} target='_blank' className="white">
                        {title}
                    </Link>
                </h5>
            </div>
        </div>
    )
}

export default VideoCard