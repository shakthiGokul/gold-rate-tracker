"use client";

import { memo } from "react";

import { MenuPageService } from "./Menu.service";
import DesktopMenu from "@/components/ui/molecules/DesktopMenu/DesktopMenu";
import MobileMenu from "@/components/ui/molecules/MobileMenu/MobileMenu";

const Menu = () => {
  const menuServices = new MenuPageService();
  const { logoInfo, menus, hamBurgerInfo, iconCloseInfo } = menuServices;

  return (
    <>
      <MobileMenu
        logoInfo={logoInfo}
        menus={menus}
        hamBurgerInfo={hamBurgerInfo}
        iconCloseInfo={iconCloseInfo}
      />
      <DesktopMenu menus={menus} logoInfo={logoInfo} />
    </>
  );
};

export default memo(Menu);
