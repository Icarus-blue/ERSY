'use client'
import PictureCard from '@/components/pages/gallery/PictureCard'
import Search from '@/components/pages/home/Search'
import api from '@/lib/api'
import { Metadata } from 'next'
import React, { useEffect, useState } from 'react'

type Props = {}

function Gallery({ }: Props) {
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        document.title = "Gallery"
    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await api.server.GET('/data/gallery?page=1&pageSize=12', '')
                const data = await res.json()
                if (!data.status) return getData()
                console.log(data)
                setGallery(data.gallery)
            } catch (error) {
                console.log("Error occurred", error.message)
            }
        }

        getData()
    }, [])
    return (
        <div className='h-auto p-5 mt-5'>
            <div className='d-flex flex-column align-items-center justify-content-center w-100 mt-5' style={{ gap: '1em' }}>
                <span className="fs-1 text-capitalize headfont d-block">Explore Gallery</span>
                <span>All the world&apos;s celebrities short are collected here.</span>
                <Search />
            </div>

            {
                !gallery.length && 'loading'
            }

            {
                gallery.map((item, index) => (
                    <PictureCard {...item} key={index} />
                ))
            }
        </div>
    )
}

export default Gallery