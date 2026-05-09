import { MenuNavigation } from "@/types/Navigation.types";
import FastImage from "../FastImage/FastImage";
import { SideBarStatus } from "@/components/features/Menu/Menu.type";
import { showSideBarOnMobileBrowser } from "./SideBar.helper";

interface SideBarProps {
  menus: MenuNavigation[];
  updateActiveTab: (idx: number) => void;
  currentActiveTab: number;
  showSideBarStatus: SideBarStatus;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const { menus, currentActiveTab, updateActiveTab, showSideBarStatus } = props;
  if (showSideBarOnMobileBrowser(showSideBarStatus)) {
    return null;
  }
  return (
    <nav className="absolute right-0 top-20">
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
              className={`flex px-3 py-3 gap-4 cursor-pointer ${borderStyles}`}
              onClick={() => updateActiveTab(idx)}
            >
              <FastImage {...imageProps} className={iconFilter} />
              <li className={`list-none font-medium ${textColor}`}>{title}</li>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
