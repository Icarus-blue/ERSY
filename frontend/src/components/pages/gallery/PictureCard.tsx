import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowNarrowRight } from '@tabler/icons-react'

type Props = {
    name_: string
}

function PictureCard({ name_ }: Props) {
    return (
        <div className="thumb ralt overhid transition">
            <Image
                src={"/img/Eminem.jpg"}
                width={390}
                height={390}
                className="transition h-auto"
                alt="img"
            />
            <div className="artist__popup d-flex align-items-center justify-content-between">
                <div className="content">
                    <h5 className="mb-1">
                        <Link href={`/artist-allsong?artist=${name_}`} className="white">
                            {name_}
                        </Link>
                    </h5>
                </div>
                <Link href={`/artist-allsong?artist=${name_}`} className="cmn__arrow">
                    <IconArrowNarrowRight className="arrowrotate" />
                </Link>
            </div>
        </div>
    )
}

export default PictureCard