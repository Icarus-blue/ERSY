import api from "@/lib/api";
import { toast } from "react-toastify";

export const getMusicVideos = async (page: number, pageSize: number) => {
  try {
    const res = await api.server.GET(
      `/data/videos?page=${page}&pageSize=${pageSize}`,
      ""
    );
    const data = await res.json();
    //   if (data.status) setVideos((prev: any) => {
    //     return [...prev, ...data.videos.filter((video, index, arr) => arr.indexOf(video) === index)]
    //   })

    return data;
  } catch (error: any) {
    toast(error.message, { theme: "dark" });
  }
};
