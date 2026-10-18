const useOriginalImage = (src: string) => import.meta.env.DEV || !src.startsWith("/");

export const optimizedImageUrl = (src: string, width: number, quality = 75) => {
  if (useOriginalImage(src)) return src;
  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
};

export const optimizedImageSrcSet = (
  src: string,
  widths: number[],
  quality = 75
) => {
  if (useOriginalImage(src)) return undefined;
  return widths
    .map((width) => `${optimizedImageUrl(src, width, quality)} ${width}w`)
    .join(", ");
};
