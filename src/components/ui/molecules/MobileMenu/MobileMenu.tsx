import { memo, useState } from "react";
import { ImageProps } from "next/image";
import dynamic from "next/dynamic";

import { SideBarStatus } from "@/components/features/Menu/Menu.type";
import { MenuNavigation } from "@/types/Navigation.types";

const HamBurgerOrCloseIcon = dynamic(
  () => import("../../atom/HamBurgerOrCloseIcon/HamBurgerOrCloseIcon")
);

const Logo = dynamic(() => import("../../atom/Logo/Logo"));

const SideBar = dynamic(() => import("../../atom/SideBar/SideBar"));

interface MobileMenuProps {
  logoInfo: ImageProps;
  menus: MenuNavigation[];
  hamBurgerInfo: ImageProps;
  iconCloseInfo: ImageProps;
  currentActiveTab: number;
  updateActiveTab: (idx: number) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const {
    logoInfo,
    menus,
    hamBurgerInfo,
    iconCloseInfo,
    currentActiveTab,
    updateActiveTab,
  } = props;

  const [showSideBarStatus, setShowSideBarStatus] = useState<SideBarStatus>(
    SideBarStatus.HIDE_SIDEBAR
  );

  const isSideBarOpen = showSideBarStatus === SideBarStatus.SHOW_SIDEBAR;
  const hamBurgerOrIconCloseInfo = isSideBarOpen
    ? iconCloseInfo
    : hamBurgerInfo;

  const updateSideBarStatus = (currentRenderInfo: ImageProps) => {
    const currentSideBarStatus =
      currentRenderInfo.id === "iconClose-1"
        ? SideBarStatus.HIDE_SIDEBAR
        : SideBarStatus.SHOW_SIDEBAR;
    setShowSideBarStatus(currentSideBarStatus);
  };

  return (
    <>
      {/* Mobile header */}
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
    </>
  );
};

export default memo(MobileMenu);
