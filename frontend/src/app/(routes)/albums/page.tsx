import { topSongData } from "@/../public/data/topSongData";
import PopularAlbums from "@/components/pages/albums/PopularAlbums";
import Trending from "@/components/pages/albums/Trending";
import BreadCrumb from "@/components/shared/BreadCrum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ablums - Ersy Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Ersy Multipurpose Audio Podcast & Music Nextjs Template",
};
const albums = () => {
  return (
    <>
      <BreadCrumb page="Albums" />
      <Trending />
      <PopularAlbums sectionTitle="Popular Albums" sliderData={topSongData} />
    </>
  );
};

export default albums;
