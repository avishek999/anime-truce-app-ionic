import React, { useEffect, useRef } from "react";
import Wrapper from "../../shared/utils/wrapper/Wrapper";
import { IAnimeDetails } from "../../interface/anime";
import { FaCirclePlay } from "react-icons/fa6";
import BackButton from "../../components/BackButton";
import { useWatchAnimeDetails } from "../../Hooks/react-query";
import { useParams } from "react-router";
import Hls from "hls.js";

const AnimeWatch = () => {
  const { id, episode } = useParams<{ id: string; episode?: string }>();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Fetch anime details
  const { data, isLoading, error } = useWatchAnimeDetails(id);

  // Extract video source
  const video = data?.sources?.[0].url ;

  // const proxyVideoUrl = video ? `http://localhost:3001/proxy?url=${encodeURIComponent(video)}` : '';
  // console.log(proxyVideoUrl);

  const proxyVideoUrl = video ? `https://cors-anywhere.herokuapp.com/${video}` : '';


  useEffect(() => {
    if (proxyVideoUrl && videoRef.current) {
      console.log(proxyVideoUrl);
      
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(proxyVideoUrl);
        hls.attachMedia(videoRef.current);
        return () => hls.destroy();
      } else {
        // Fallback for browsers without HLS support
        videoRef.current.src = proxyVideoUrl;
      }
    }
  }, [proxyVideoUrl]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Wrapper>
      <div className="video-container">
        <video
          ref={videoRef}
          controls
          className="bg-black shadow-2xl shadow-purple-300/30"
          poster={data?.image}
          aria-label="Anime video player"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="text-center text-2xl mt-2">
          <h1 className="font-bold">{data?.title}</h1>
          <h3 className="mt-4">Episode {episode}</h3>
        </div>
      </div>
      <BackButton />
    </Wrapper>
  );
};

export default AnimeWatch;
