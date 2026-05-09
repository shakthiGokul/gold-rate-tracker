"use client";

import { HamBurgerOrCloseIcon, Logo, SideBar } from "@/components/ui/atom";

import { useState } from "react";
import { MenuPageService } from "./Menu.service";
import { SideBarStatus } from "./Menu.type";
import { ImageProps } from "next/image";

const Menu = () => {
  const menuServices = new MenuPageService();
  const { logoInfo, menus, hamBurgerInfo, iconCloseInfo } = menuServices;
  const [currentActiveTab, setCurrentActiveTab] = useState<number>(0);
  const [showSideBarStatus, setShowSideBarStatus] = useState<SideBarStatus>(
    SideBarStatus.INITIALED
  );

  const updateActiveTab = (activeTabIdx: number) => {
    setCurrentActiveTab(activeTabIdx);
  };

  const updateSideBarStatus = (currentRenderInfo: ImageProps) => {
    const currentSideBarStatus =
      currentRenderInfo.alt === "iconClose"
        ? SideBarStatus.HIDE_SIDEBAR
        : SideBarStatus.SHOW_SIDEBAR;
    setShowSideBarStatus(currentSideBarStatus);
  };

  const hamBurgerOrIconCloseInfo =
    showSideBarStatus === SideBarStatus.HIDE_SIDEBAR
      ? hamBurgerInfo
      : iconCloseInfo;

  return (
    <main className="md:w-[100%] flex flex-row px-2 py-6 justify-between">
      <Logo {...logoInfo} />
      <div
        className="md:hidden"
        onClick={() => updateSideBarStatus(hamBurgerOrIconCloseInfo)}
      >
        <HamBurgerOrCloseIcon {...hamBurgerOrIconCloseInfo} />
      </div>
      <SideBar
        menus={menus}
        currentActiveTab={currentActiveTab}
        updateActiveTab={updateActiveTab}
        showSideBarStatus={showSideBarStatus}
      />
    </main>
  );
};

export default Menu;
