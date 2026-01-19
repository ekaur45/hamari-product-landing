export const getImageUrl = (path: string) => {
    if (!path) return '/images/placeholder.png';

    if (path.startsWith('http')) return path;
  
    return `${process.env.NEXT_PUBLIC_ASSET_URL}${path}`;
}