export interface IAnimeDetails {
    id: string;
    title: string;
    image: string;
    description: string;
    totalEpisodes:number;
    type: string;
    recommendations: IAnimeRecommendation[];
    episodes: episodes[]
  }
  
 interface IAnimeRecommendation {
    id: string;
    title: string;
    image: string;
    duration: string;
    type: string;
    sub: number;
    dub: number;
    episodes: number;
  }
  

interface episodes {
    id: string,
    number: number,
    title: string,
    isFiller:boolean
}