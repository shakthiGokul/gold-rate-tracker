"use client";

import { MenuNavigation } from "@/types/Navigation.types";

import { MenuPageService } from "./Menu.service";
import { useState } from "react";
import { Logo } from "@/components/ui/atom";

const Menu = () => {
  const menuServices = new MenuPageService();
  const { logoInfo, menus } = menuServices;
  const [currentActiveTab, setCurrentActiveTab] = useState<number>(0);

  const updateActiveTab = (activeTabIdx: number) => {
    setCurrentActiveTab(activeTabIdx);
  };

  return (
    <main className="flex flex-row px-6 py-6 justify-between">
      <Logo logoInfo={logoInfo} />
      {/* <nav className="py-6">
        <ul>
          {menus.map((menu: MenuNavigation, idx: number) => {
            const { id, title, ...imageProps } = menu;
            const isActiveTab = currentActiveTab === idx;
            const borderStyles = isActiveTab ? "bg-[#D4AF37] rounded-lg" : "";
            const iconFilter = isActiveTab ? "invert" : "";
            const textColor = isActiveTab ? "text-[#241A00]" : "text-[#EAE1D4]";
            return (
              <div
                key={id}
                className={`flex items-center gap-3 py-3 px-3 cursor-pointer ${borderStyles}`}
                onClick={() => updateActiveTab(idx)}
              >
                <FastImage {...imageProps} className={iconFilter} />
                <li className={`list-none font-medium ${textColor}`}>
                  {title}
                </li>
              </div>
            );
          })}
        </ul>
      </nav> */}
    </main>
  );
};

export default Menu;
