import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { fetchData } from '@/utils/fetchData'

type Props = {}

function NotificationDropdown({ }: Props) {
    return (
        <div
            className="dropdown-menu dropdown-menu-end "
            data-popper-placement="bottom-end"
        >
            <ul className="list">
{/* 
                {
                    notifications?.map(notification => (
                        <li className="mb-16" key={notification.id_}>
                            <Link href="#0" className="link d-flex dropdown-item">
                                <Image
                                    width={200}
                                    height={200}
                                    src="/img/mood/mood2.jpg"
                                    className="notification__thumb"
                                    alt="img"
                                />
                                <span className="notify__content">
                                    <span className="fs-16 d-block fw-600 white ">
                                        {notification?.type_}
                                    </span>
                                    <span className="fs-14 message d-block fw-500 pra ">
                                        Message alert!
                                    </span>
                                    <span className="fs-10 fw-400 pra ">
                                        {new Date(notification?.date).toLocaleDateString()}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))
                } */}

                <li className="mb-16">
                    <Link href="#0" className="link d-flex dropdown-item">
                        <Image
                            width={200}
                            height={200}
                            src="/img/mood/mood4.jpg"
                            className="notification__thumb"
                            alt="img"
                        />
                        <span className="notify__content">
                            <span className="fs-16 d-block fw-600 white ">
                                Mlan MCcoy
                            </span>
                            <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                            </span>
                            <span className="fs-10 fw-400 pra ">
                                1 days ago
                            </span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="#0" className="link d-flex dropdown-item">
                        <Image
                            width={200}
                            height={200}
                            src="/img/mood/mood5.jpg"
                            className="notification__thumb"
                            alt="img"
                        />
                        <span className="notify__content">
                            <span className="fs-16 d-block fw-600 white ">
                                Neymer Jr
                            </span>
                            <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                            </span>
                            <span className="fs-10 fw-400 pra ">
                                2 Month ago
                            </span>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NotificationDropdown