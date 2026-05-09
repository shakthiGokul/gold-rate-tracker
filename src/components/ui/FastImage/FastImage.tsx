import Image, { ImageProps } from "next/image";
import { memo } from "react";
import SkeletonLoader from "../skeletonLoader/SkeletonLoader";

const FastImage: React.FC<ImageProps> = (props) => {
  const { src, alt, ...imageProps } = props;
  if (!src && !alt) {
    return <SkeletonLoader />;
  }
  return <Image src={src} alt={alt} {...imageProps} />;
};

export default memo(FastImage);
