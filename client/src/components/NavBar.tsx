import { Link } from "react-router-dom";
import type { NavItem } from "../data/Interfaces";
import { NavData } from "../data/NavData";

const NavBar = () => {
  return (
    <div className="h-30 border-b-2 border-blue-900 bg-blue-50 w-full">
      <div>
        <img
          src="../../Public/AnchorProductivityLogo.png"
          alt="Logo"
          className="w-30 absolute left-0 top-0"
        />
        <img
          src="../../Public/AnchorProductivityLogo.png"
          alt="Logo"
          className="w-30 absolute right-0 top-0"
        />
      </div>
      <div className="flex justify-center align-bottom h-full gap-5">
        {NavData.map((navItem: NavItem, index: number) => {
          return <Link to={navItem.to} key={index} className="h-full align-text-bottom">{navItem.name}</Link>;
        })}
      </div>
    </div>
  );
};

export default NavBar;
