import { ICurrency } from "@/types/currency";

export const getImageUrl = (path: string) => {
    if (!path) return '/images/placeholder.png';

    if (path.startsWith('http')) return path;
    return `${process.env.NEXT_PUBLIC_ASSET_URL}${path}`;
}
export const isYouTubeUrl = (url: string) => {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
  };
export const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return '';
  
    // Extract the video ID from any YouTube URL
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
  
    if (!match) return '';
  
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };
  export const getVideoUrl = (path: string) => {
    if (!path) return '/images/placeholder.png';

    if (path.startsWith('http')) {
        if (isYouTubeUrl(path)) return getYouTubeEmbedUrl(path);
        return path;
    }
    return `${process.env.NEXT_PUBLIC_ASSET_URL}${path}`;
}
export const exchangeRate = (amount: number): string => {
    if (typeof window === "undefined") return amount.toString();

    let currencies: ICurrency[] = [];

    try {
        currencies = JSON.parse(localStorage.getItem("currencies") ?? "[]");
    } catch {
        return  amount.toString();
    }

    const selectedCurrency = getCookie("currency") ?? "USD";

    const from = currencies.find(currency => currency.isBase === true);
    const to = currencies.find(currency => currency.code === selectedCurrency);

    if (!from || !to || typeof to.exchangeRate !== "number") {
        return amount.toString();
    }

    // Correct formula: convert from base → target
    return (amount * to.exchangeRate).toFixed(3) ;
};


export function getCookie(name: string) {
    if (typeof window === "undefined") return "USD";
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? "USD";
    return "USD";
  }