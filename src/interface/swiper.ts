export interface ISwiper {
    id: string;
    image: string;
    title: string;
  }
  
  export interface IBannerSwiper {
    slides: ISwiper[];
    heading?: string;
  }