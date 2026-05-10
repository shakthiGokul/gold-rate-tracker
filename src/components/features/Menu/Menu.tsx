"use client";

import { memo } from "react";

import { MenuPageService } from "./Menu.service";
import DesktopMenu from "@/components/ui/molecules/DesktopMenu/DesktopMenu";
import MobileMenu from "@/components/ui/molecules/MobileMenu/MobileMenu";
import { usePathname } from "next/navigation";

const Menu = () => {
  const menuServices = new MenuPageService();
  const { logoInfo, menus, hamBurgerInfo, iconCloseInfo } = menuServices;
  const pathname = usePathname();

  return (
    <>
      <MobileMenu
        logoInfo={logoInfo}
        menus={menus}
        hamBurgerInfo={hamBurgerInfo}
        iconCloseInfo={iconCloseInfo}
        currentPathName={pathname}
      />
      <DesktopMenu
        menus={menus}
        logoInfo={logoInfo}
        currentPathName={pathname}
      />
    </>
  );
};

export default memo(Menu);
