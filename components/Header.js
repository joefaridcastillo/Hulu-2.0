import { HomeIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import HeaderItems from "./HeaderItems";

function Header() {
  return (
    <header>
      <div>
        <HeaderItems title="HOME" Icon={HomeIcon} />
      </div>
      <h1>This is the header</h1>
      <Image src="/hulo-logo.png" width={200} height={100} alt="Hulu Logo" />
    </header>
  );
}

export default Header;
