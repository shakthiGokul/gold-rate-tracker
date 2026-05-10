import React from "react";
import { SideBarStatus } from "@/components/features/Menu/Menu.type";
import { MenuNavigation } from "@/types/Navigation.types";
import { ImageProps } from "next/image";

import { Logo, SideBar } from "../../atom";

interface DesktopMenuProps {
  logoInfo: ImageProps;
  menus: MenuNavigation[];
  currentPathName: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = (props) => {
  const { logoInfo, menus, currentPathName } = props;
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-[#4D4635] px-6 py-6 min-h-full">
      <Logo {...logoInfo} />
      <SideBar
        menus={menus}
        showSideBarStatus={SideBarStatus.SHOW_SIDEBAR}
        currentPathName={currentPathName}
      />
    </aside>
  );
};

export default DesktopMenu;
