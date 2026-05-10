"use client";
import React, { memo } from "react";

import FastImage from "../FastImage/FastImage";
import { ImageProps } from "next/image";

const Logo: React.FC<ImageProps> = (logoInfo) => {
  return (
    <div className="flex justify-start items-start flex-wrap">
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
