"use client";

import { memo, useState } from "react";

import { MenuPageService } from "./Menu.service";
import DesktopMenu from "@/components/ui/molecules/DesktopMenu/DesktopMenu";
import MobileMenu from "@/components/ui/molecules/MobileMenu/MobileMenu";

const Menu = () => {
  const menuServices = new MenuPageService();
  const { logoInfo, menus, hamBurgerInfo, iconCloseInfo } = menuServices;
  const [currentActiveTab, setCurrentActiveTab] = useState<number>(0);

  const updateActiveTab = (activeTabIdx: number) => {
    setCurrentActiveTab(activeTabIdx);
  };

  return (
    <>
      <MobileMenu
        logoInfo={logoInfo}
        menus={menus}
        hamBurgerInfo={hamBurgerInfo}
        iconCloseInfo={iconCloseInfo}
        currentActiveTab={currentActiveTab}
        updateActiveTab={updateActiveTab}
      />
      <DesktopMenu
        menus={menus}
        currentActiveTab={currentActiveTab}
        updateActiveTab={updateActiveTab}
        logoInfo={logoInfo}
      />
    </>
  );
};

export default memo(Menu);
