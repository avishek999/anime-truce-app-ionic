import { useQuery } from "@tanstack/react-query";
import { getRecentAnimeData, getTopAiringAnimeData } from "../api/api";

export const useTopAiringAnime = () => {
    return useQuery({
      queryKey: ["topAiringAnime"], 
      queryFn: getTopAiringAnimeData, 
    });
  };
  

  
export const useRecentAnime = () => {
    return useQuery({
      queryKey: ["recentAiringAnime"], 
      queryFn: getRecentAnimeData, 
    });
  };
  