import React from "react";
import getSideBarData from "./SideBarData";
import joshuaImage from "../../assets/joshua.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const SideBarData = getSideBarData(logout);
//   console.log(user)

  return (
    <>
      <div className="rounded-xl bg-orange-100">
        <img src={joshuaImage} className="w-[200px] grayscale rounded-tl-xl" />
        <div className="h-auto w-[200px] bg-orange-100 rounded-bl-xl">
          <ul className="h-auto w-full p-0">
            {SideBarData.filter(
              (val) => !val.requiresAdmin || user?.role === "admin"
            ).map((val, key) => {
              return (
                <li
                  key={key}
                  className="w-full h-[50px] list-none m-0 flex flex-row justify-center items-center hover:bg-orange-50 hover:pointer cursor-pointer"
                  onClick={() => {
                    val.callback();
                    navigate(val.link);
                  }}
                >
                  <div className="flex basis=[30%]">{val.icon}</div>
                  <div className="flex basis-[70%] place-items-center p-2">
                    {val.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
