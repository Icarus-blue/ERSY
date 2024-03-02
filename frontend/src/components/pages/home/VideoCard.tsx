import Image from 'next/image'
import React from 'react'
import PlayButton from './PlayButton'
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setVideoId } from '@/redux/features/modalSlice';
import { formatViewsCount } from '@/components/shared/formattedViews';

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

function VideoCard({ img, title, video_id, uploader, views }: Props) {
    const dispatch = useDispatch()
    return (
        <div className="moods__item play-button-container card h-100 d-flex flex-column justify-content-between" data-bs-toggle='modal'
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
            <div className="content d-flex flex-column">
                <h5 className="mb-2">
                    <Link href={`#`} target='_blank' data-bs-toggle='modal'
                    
                        onClick={() => {
                            dispatch(setVideoId(video_id))
                        }}
                        className="white">
                        {title}
                    </Link>
                </h5>

                <span style={{color:'#5c5c5c', fontSize:'0.8rem'}}>
                    {uploader}
                </span>
                <span style={{ color: '#5c5c5c', fontSize: '0.8rem' }}>
                    {views && formatViewsCount(views)} views
                </span>
            </div>
        </div>
    )
}

export default VideoCard