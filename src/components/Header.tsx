"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const route = useRouter();
  const menu: TMenu[] = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const searchFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      route.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <div className="flex items-center gap-5 h-20 p-5">
      <div
        className="bg-amber-600 rounded-lg p-3 text-2xl font-bold cursor-pointer"
        onClick={() => route.push("/")}
      >
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          type="text"
          placeholder="Search"
          value={keyword}
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((item, i) => (
        <MenuItem mn={item} key={i} />
      ))}
    </div>
  );
};

export default Header;
