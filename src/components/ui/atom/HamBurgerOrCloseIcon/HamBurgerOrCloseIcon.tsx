import { ImageProps } from "next/image";

import FastImage from "../FastImage/FastImage";

const HamBurgerOrCloseIcon: React.FC<ImageProps> = (props): React.ReactNode => {
  const updatedClassName =
    props.id === "iconClose-1" ? "flex-1 justify-self-end " : "";
  return <FastImage {...props} className={updatedClassName} />;
};

export default HamBurgerOrCloseIcon;
