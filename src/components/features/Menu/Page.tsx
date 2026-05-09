"use client";

import Image from "next/image";
import { MenuPageService } from "./Menu.service";

const service = new MenuPageService();

const Menu = () => {
  return (
    <main>
      <div>
        <Image
          src={service.logoUrl}
          alt="Gold Tracker Logo"
          width={24}
          height={24}
        />
        <div>
          <p>GOLD RATE</p>
          <p>TRACKER</p>
        </div>
      </div>
      <nav>
        <ul>
          {service.menus.map((item) => (
            <li key={item.id}>
              <Image src={item.url} alt={item.alt} width={20} height={20} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Menu;
