import { StaticImageData } from "next/image";
import SongUpgradeTableRow from "./SongUpgradeTableRow";
import VideoCard from "../home/VideoCard";
import ShortMusicVideo from "@/components/shared/ShortMusicVideo";
type Props = {
  sectionTitle: string;
  artistSong: {
    id?: string;
    title?: string;
    location?: string;
    listeners?: number;
    img?: string;
    id_?: string;
    artist_id?: string;
    artist_name?: string;
    artist_url?: string;
    feat_artists?: string;
    video_id?: string;
    uploader?: string;
    release_date?: Date;
    added_date?: Date;
    category?: string;
    views?: string;
    duration: number;
  }[];
};

const SongUpgrade = ({ sectionTitle, artistSong }: Props) => {
  return (
    // <!--song upgrade section-->
    <section className="latest__upgrade pb-100 pr-24 pl-24">
      <div className="container-flud p-0">
        <h3 className="white mb-16">{sectionTitle}</h3>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="latest__songwrap moods__allsong">
              <table className="table align-middle align-center w-100">
                <tbody>
                  {artistSong.slice(0, 5).map(({ ...props }, index) => (
                    <ShortMusicVideo
                      key={props.id_}
                      {...props}
                      index={index + 1}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="latest__songwrap moods__allsong">
              <table className="table align-middle align-center w-100">
                <tbody>
                  {artistSong.slice(5, 10).map(({ id, ...props }, index) => (
                    <ShortMusicVideo
                      key={props.id_}
                      {...props}
                      index={index + 1}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-center mt-40">
          <button className="cmn__simple2">Load More</button>
        </div>
      </div>
    </section>
  );
};

export default SongUpgrade;
