import {
  HomeIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  BoltIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import Image from "next/image";
import HeaderItems from "./HeaderItems";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={BoltIcon} />
        <HeaderItems title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItems title="COLLECTIONS" Icon={RectangleStackIcon} />
        <HeaderItems title="SEARCH" Icon={MagnifyingGlassCircleIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>

      <Image src="/hulo-logo.png" width={100} height={50} alt="Hulu Logo" />
    </header>
  );
}

export default Header;
