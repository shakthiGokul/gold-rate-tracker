"use client";

import { MenuNavigation } from "@/types/Navigation.types";
import FastImage from "@/components/ui/FastImage/FastImage";

import { MenuPageService } from "./Menu.service";
import { useState } from "react";

const Menu = () => {
  const menuServices = new MenuPageService();
  const { logoInfo, menus } = menuServices;
  const [menuTabs, setMenuTabs] = useState<MenuNavigation[]>(menus);
  return (
    <main className="flex flex-col justify-start px-6 py-6 w-[15%] border-r border-[#4D4635] min-h-full">
      <div className="flex justify-center items-center flex-wrap">
        <FastImage width={40} height={40} {...logoInfo} />
        <div className="px-3">
          <p className="font-semibold text-xl uppercase text-[#EAE1D4]">
            GOLD RATE
          </p>
          <p className="font-bold text-xs uppercase text-[#F2CA50]">TRACKER</p>
        </div>
      </div>
      <nav className="py-6">
        <ul>
          {menuTabs.map((menu: MenuNavigation) => {
            const { id, title, isActiveTab, ...imageProps } = menu;
            return (
              <div key={id} className="flex items-center gap-3 py-3">
                <FastImage {...imageProps} />
                <li className="list-none">{title}</li>
              </div>
            );
          })}
        </ul>
      </nav>
    </main>
  );
};

export default Menu;
