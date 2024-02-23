"use client";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";
import { RootState } from "@/redux/store";
import { IconHeadphones, IconListTree } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import PlayButton from "./PlayButton";

type Props = {
  image: StaticImageData;
  title: string;
  location: string;
  listeners: number;
  audioLink?: string;
};
const TrendingSliderCard = ({
  image,
  title,
  location,
  listeners,
  audioLink = "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
}: Props) => {
  const { handlePlayButtonClick } = usePlayButtonClick();

  const audioTrack = useSelector((state: RootState) => state.track);

  const audio = audioTrack?.url;
  const isPlaying = audioTrack?.isPlaying;

  return (
    <>
      <div className="swiper-slide trending__item text-center round16 p-8 play-button-container">
        <div className="thumb ralt overhid transition ">
          <Image src={image} className="transition h-auto" alt="img" />

          <PlayButton
            audioTrack={audio === audioLink}
            isPlaying={isPlaying}
            onClick={() => handlePlayButtonClick(audioLink)}
          />

          <div className="trending__bbar d-flex align-items-center justify-content-around">
            <Link
              href="#"
              className="d-flex fs-16 fw-500 white align-items-center gap-3"
            >
              <IconListTree />
              37
            </Link>
            <Link
              href="#"
              className="d-flex fs-16 fw-500 white align-items-center gap-3"
            >
              <IconHeadphones />
              {listeners}
            </Link>
          </div>
        </div>
        <div className="content mt-16">
          <h5>
            <Link href="trending-details" className="white d-block mb-1">
              {title}
            </Link>
            <span className="d-block transition fs-16 fw-500 pra2">
              {location}
            </span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default TrendingSliderCard;
