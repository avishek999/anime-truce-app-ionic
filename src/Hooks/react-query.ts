import { useQuery } from "@tanstack/react-query";
import {
  getAnimeDetails,
  getAnimeWatchDetails,
  getPopularAnimeData,
  getRandomAnimeData,
  getRecentAnimeData,
  getTopAiringAnimeData,
} from "../api/api";

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

export const usePopularAnime = () => {
  return useQuery({
    queryKey: ["popularAiringAnime"],
    queryFn: getPopularAnimeData,
  });
};

export const useRandomAnime = () => {
  return useQuery({
    queryKey: ["RandomAiringAnime"],
    queryFn: getRandomAnimeData,
  });
};

export const useAnimeDetails = (id: string) => {
  return useQuery({
    queryKey: ["detailsAnime", id],
    queryFn: () => getAnimeDetails(id),
    enabled: !!id,
  });
};

export const useWatchAnimeDetails = (id: string) => {
  return useQuery({
    queryKey: ["watchAnime", id],
    queryFn: () => getAnimeWatchDetails(id),
    enabled: !!id,
  });
};

// ############################################# Anime list end ##################################
