"use client";

import WorkInProgress from "@/components/features/WorkInProgress/WorkInProgress";
import { memo } from "react";

const FallbackLink = () => {
  return <WorkInProgress />;
};

export default memo(FallbackLink);
