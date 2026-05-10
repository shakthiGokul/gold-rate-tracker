"use client";

import { FastImage } from "@/components/ui/atom";
import { memo } from "react";

const WorkInProgress = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen gap-8">
      {/* Pulsing ring + icon */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-48 h-48 rounded-full bg-[#D4AF37] animate-ping opacity-10" />
        <div
          className="absolute w-36 h-36 rounded-full bg-[#D4AF37] animate-ping opacity-10"
          style={{ animationDelay: "300ms" }}
        />
        <div className="animate-pulse">
          <FastImage
            src={"/assets/icons/fallBack.svg"}
            alt={"Work In Progress"}
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#D4AF37] text-2xl font-bold uppercase tracking-widest">
          Work In Progress
        </p>
        <p className="text-[#D0C5AF] text-sm">This page is coming soon</p>
      </div>

      {/* Bouncing dots */}
      <div className="flex gap-3">
        <span
          className="w-3 h-3 rounded-full bg-[#D4AF37] animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-3 h-3 rounded-full bg-[#D4AF37] animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-3 h-3 rounded-full bg-[#D4AF37] animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
};

export default memo(WorkInProgress);
