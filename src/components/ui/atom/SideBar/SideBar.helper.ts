import { SideBarStatus } from "@/components/features/Menu/Menu.type";

export const showSideBarOnMobileBrowser = (
  showSideBarStatus: SideBarStatus
) => {
  return SideBarStatus.HIDE_SIDEBAR === showSideBarStatus;
};
