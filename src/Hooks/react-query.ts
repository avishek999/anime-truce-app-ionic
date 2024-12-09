import { useQuery } from "@tanstack/react-query";
import { getRecentAnimeData, getTopAiringAnimeData } from "../api/api";




// ############################################# Anime list start ##################################

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
  

// ############################################# Anime list end ##################################
