"use client";
import React, { memo } from "react";

import FastImage from "../FastImage/FastImage";
import { ImageProps } from "next/image";

export interface LogoProps {
  logoInfo: ImageProps;
}

const Logo: React.FC<LogoProps> = ({ logoInfo }): React.ReactNode => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <FastImage width={40} height={40} {...logoInfo} />
      <div className="px-3">
        <p className="font-semibold text-xl uppercase text-[#EAE1D4]">
          GOLD RATE
        </p>
        <p className="font-bold text-xs uppercase text-[#F2CA50]">TRACKER</p>
      </div>
    </div>
  );
};

export default memo(Logo);
