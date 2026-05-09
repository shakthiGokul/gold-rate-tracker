import { FastImage, MenuNavigation } from "@/types/Navigation.types";

export class MenuPageService {
  logoInfo: FastImage;
  menus: MenuNavigation[];

  constructor() {
    this.logoInfo = { src: "/assets/logo.svg", alt: "Gold Tracker Logo" };
    this.menus = [
      {
        id: 1,
        src: "/assets/icons/dashBoard.svg",
        title: "Dashboard",
        alt: "Dashboard",
        width: 18,
        height: 18,
        isActiveTab: true,
      },
      {
        id: 2,
        src: "/assets/icons/liveRates.svg",
        title: "Live Rates",
        alt: "Live Rates",
        width: 20,
        height: 13,
        isActiveTab: false,
      },
      {
        id: 3,
        src: "/assets/icons/trendsAndCharts.svg",
        title: "Trends & Charts",
        alt: "Trends And Charts",
        width: 20,
        height: 16,
        isActiveTab: false,
      },
      {
        id: 4,
        src: "/assets/icons/compare.svg",
        title: "Compare",
        alt: "Compare",
        width: 18,
        height: 18,
        isActiveTab: false,
      },
      {
        id: 5,
        src: "/assets/icons/alerts.svg",
        title: "Alerts",
        alt: "Alerts",
        width: 16,
        height: 20,
        isActiveTab: false,
      },
      {
        id: 6,
        src: "/assets/icons/calculator.svg",
        title: "Calculator",
        alt: "Calculator",
        width: 18,
        height: 18,
        isActiveTab: false,
      },
      {
        id: 7,
        src: "/assets/icons/newsAndInsights.svg",
        title: "News & Insights",
        alt: "News And Insights",
        width: 20,
        height: 18,
        isActiveTab: false,
      },
      {
        id: 8,
        src: "/assets/icons/newsAndInsights.svg",
        title: "News & Insights",
        alt: "News And Insights",
        width: 20,
        height: 18,
        isActiveTab: false,
      },
    ];
  }
}
