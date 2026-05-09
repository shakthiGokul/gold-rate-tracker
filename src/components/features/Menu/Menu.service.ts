import { MenuNavigationTypes } from "@/types/Navigation.types";

export class MenuPageService {
  logoUrl: string;
  menus: MenuNavigationTypes[];

  constructor() {
    this.logoUrl = "/assets/logo.svg";
    this.menus = [
      {
        id: 1,
        url: "/assets/icons/dashBoard.svg",
        title: "Dashboard",
        alt: "Dashboard",
      },
      {
        id: 2,
        url: "/assets/icons/liveRates.svg",
        title: "Live Rates",
        alt: "Live Rates",
      },
      {
        id: 3,
        url: "/assets/icons/trendsAndCharts.svg",
        title: "Trends & Charts",
        alt: "Trends And Charts",
      },
      {
        id: 4,
        url: "/assets/icons/alerts.svg",
        title: "Alerts",
        alt: "Alerts",
      },
      {
        id: 5,
        url: "/assets/icons/calculator.svg",
        title: "Calculator",
        alt: "Calculator",
      },
      {
        id: 6,
        url: "/assets/icons/compare.svg",
        title: "Compare",
        alt: "Compare",
      },
      {
        id: 7,
        url: "/assets/icons/favourites.svg",
        title: "Favourites",
        alt: "Favourites",
      },
      {
        id: 8,
        url: "/assets/icons/newsAndInsights.svg",
        title: "News & Insights",
        alt: "News And Insights",
      },
    ];
  }
}
