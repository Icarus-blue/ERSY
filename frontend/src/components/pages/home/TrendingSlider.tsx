"use client";
import { trendingsliderData } from "@/../public/data/trendingSliderData";
import Trending from "./Trending";
import TrendingSliderCard from "./TrendingSliderCard";
import { useEffect, useState } from "react";
import { getMusicVideos } from "@/utils/getMusicVideos";
import VideoCard from "./VideoCard";

const TrendingSlider = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getMusicVideos(5, 5);
      data.status && setVideos(prev => ([...prev, ...data.videos]))
    }
    getData()
  }, [])
  return (
    <Trending sectionTitle="Trending Songs" sliderData={videos}>
      {/* {(props) => <VideoCard {...props} />} */}
      {((props) => <VideoCard {...props} />)}
    </Trending>
  );
};

export default TrendingSlider;
