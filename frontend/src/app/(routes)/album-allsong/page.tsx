import { songUpgradeData } from "@/../public/data/songUpgrdeData";
import SongUpgrade from "@/components/pages/album-allsong/SongUpgrade";
import TopSinger from "@/components/pages/album-allsong/TopSinger";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Album All Song - Ersy Multipurpose Audio Podcast & Music Nextjs Template",
  description: "Ersy Multipurpose Audio Podcast & Music Nextjs Template",
};
const albumAllSong = () => {
  return (
    <>
      <TopSinger />
      {/* <SongUpgrade sectionTitle="Mix All Songs" artistSong={songUpgradeData} /> */}
    </>
  );
};

export default albumAllSong;
