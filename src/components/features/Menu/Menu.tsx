"use client";

import { useState } from "react";
import { ImageProps } from "next/image";

import { HamBurgerOrCloseIcon, Logo, SideBar } from "@/components/ui/atom";

import { MenuPageService } from "./Menu.service";
import { SideBarStatus } from "./Menu.type";

const Menu = () => {
  const menuServices = new MenuPageService();
  const { logoInfo, menus, hamBurgerInfo, iconCloseInfo } = menuServices;
  const [currentActiveTab, setCurrentActiveTab] = useState<number>(0);
  const [showSideBarStatus, setShowSideBarStatus] = useState<SideBarStatus>(
    SideBarStatus.HIDE_SIDEBAR
  );

  const updateActiveTab = (activeTabIdx: number) => {
    setCurrentActiveTab(activeTabIdx);
  };

  const updateSideBarStatus = (currentRenderInfo: ImageProps) => {
    const currentSideBarStatus =
      currentRenderInfo.id === "iconClose-1"
        ? SideBarStatus.HIDE_SIDEBAR
        : SideBarStatus.SHOW_SIDEBAR;
    setShowSideBarStatus(currentSideBarStatus);
  };

  const isSideBarOpen = showSideBarStatus === SideBarStatus.SHOW_SIDEBAR;
  const hamBurgerOrIconCloseInfo = isSideBarOpen
    ? iconCloseInfo
    : hamBurgerInfo;

  return (
    <>
      {/* Mobile header — always visible */}
      <header className="md:hidden flex flex-row justify-between items-center py-4 px-4 border-b border-[#4D4635]">
        <Logo {...logoInfo} />
        <div onClick={() => updateSideBarStatus(hamBurgerOrIconCloseInfo)}>
          <HamBurgerOrCloseIcon {...hamBurgerOrIconCloseInfo} />
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {isSideBarOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col">
          <div className="flex flex-row justify-between items-center py-4 px-4 border-b border-[#4D4635]">
            <Logo {...logoInfo} />
            <div onClick={() => updateSideBarStatus(iconCloseInfo)}>
              <HamBurgerOrCloseIcon {...iconCloseInfo} />
            </div>
          </div>
          <SideBar
            menus={menus}
            currentActiveTab={currentActiveTab}
            updateActiveTab={updateActiveTab}
            showSideBarStatus={SideBarStatus.SHOW_SIDEBAR}
          />
        </div>
      )}

      {/* Desktop sidebar — always visible */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[#4D4635] px-6 py-6 min-h-full">
        <Logo {...logoInfo} />
        <SideBar
          menus={menus}
          currentActiveTab={currentActiveTab}
          updateActiveTab={updateActiveTab}
          showSideBarStatus={SideBarStatus.SHOW_SIDEBAR}
        />
      </aside>
    </>
  );
};

export default Menu;
