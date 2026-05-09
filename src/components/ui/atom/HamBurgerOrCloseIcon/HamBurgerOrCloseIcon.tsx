import { ImageProps } from "next/image";

import FastImage from "../FastImage/FastImage";

const HamBurgerOrCloseIcon: React.FC<ImageProps> = (props): React.ReactNode => {
  return <FastImage {...props} />;
};

export default HamBurgerOrCloseIcon;
