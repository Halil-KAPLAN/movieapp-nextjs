import Link from "next/link";
import React from "react";

interface IMenuItem {
  mn: TMenu;
}

const MenuItem: React.FC<IMenuItem> = ({ mn }) => {
  return <Link href={mn.url}>{mn.name}</Link>;
};

export default MenuItem;
