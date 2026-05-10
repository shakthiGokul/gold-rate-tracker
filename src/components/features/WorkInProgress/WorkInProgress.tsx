import { FastImage } from "@/components/ui/atom";
import { memo } from "react";

const WorkInProgress = () => {
  return (
    <div className="flex flex-1 items-center justify-center min-h-screen">
      <FastImage
        src={"/assets/icons/fallBack.svg"}
        alt={"fallBack"}
        width={200}
        height={200}
      />
    </div>
  );
};

export default memo(WorkInProgress);
