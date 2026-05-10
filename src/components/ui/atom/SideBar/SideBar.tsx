"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuNavigation } from "@/types/Navigation.types";
import FastImage from "../FastImage/FastImage";
import { SideBarStatus } from "@/components/features/Menu/Menu.type";
import { showSideBarOnMobileBrowser } from "./SideBar.helper";

interface SideBarProps {
  menus: MenuNavigation[];
  showSideBarStatus: SideBarStatus;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const { menus, showSideBarStatus } = props;
  const pathname = usePathname();

  if (showSideBarOnMobileBrowser(showSideBarStatus)) {
    return null;
  }

  return (
    <nav className="py-6">
      <ul>
        {menus.map((menu: MenuNavigation) => {
          const { id, title, href, ...imageProps } = menu;
          const isActiveTab = pathname === href;
          const borderStyles = isActiveTab ? "bg-[#D4AF37] rounded-lg" : "";
          const iconFilter = isActiveTab ? "invert" : "";
          const textColor = isActiveTab ? "text-[#241A00]" : "text-[#EAE1D4]";
          return (
            <Link key={id} href={href}>
              <div
                className={`flex items-center px-3 py-3 gap-3 cursor-pointer ${borderStyles}`}
              >
                <FastImage {...imageProps} className={iconFilter} />
                <li
                  className={`list-none font-medium whitespace-nowrap ${textColor}`}
                >
                  {title}
                </li>
              </div>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
