'use client'
import { productData } from "@/../public/data/productDta";
import Artists from "@/components/pages/home/Artists";
import Banner from "@/components/pages/home/Banner";
import FeaturedShows from "@/components/pages/home/FeaturedShows";
import LatestPost from "@/components/pages/home/LatestPost";
import Moods from "@/components/pages/home/Moods";
import Podcasts from "@/components/pages/home/Podcast";
import Product from "@/components/pages/home/Product";
import TrendingSlider from "@/components/pages/home/TrendingSlider";
import Workout from "@/components/pages/home/Workout";
import api from "@/lib/api";
import { login, logout } from "@/redux/userSlice";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Page = () => {

  return (
    <>
      <Banner />
      <TrendingSlider />
      {/* <Moods /> */}
      <Artists />
      {/* <Workout start={0} end={6} /> */}
      {/* <FeaturedShows /> */}
      <Podcasts />
      <Product sectionTitle="Product" componentData={productData} />
      <LatestPost />
    </>
  );
};

export default Page;
