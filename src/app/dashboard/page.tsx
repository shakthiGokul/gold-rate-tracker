import { memo } from "react";

const DashBoard = () => {
  return (
    <main className="min-w-full min-h-full px-12 py-12 flex flex-1 gap-2 flex-col md:flex-row">
      <div className="w-full md:w-250 h-1/2 bg-[url(/assets/images/locationBackdrop.svg)] opacity-50" />
      <div className="w-full md:w-140 h-1/3 border-1 border-gray-500" />
    </main>
  );
};

export default memo(DashBoard);
