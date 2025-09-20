import React from 'react'
import {SidebarData} from "./SidebarData.jsx"
import joshuaImage from "../../assets/joshua.png"

const Sidebar = () => {
  console.log("Sidebar rendering", SidebarData);
  return (
    <>
    <div className="rounded-xl bg-orange-100">
      <img src={joshuaImage} className="w-[200px] grayscale rounded-tl-xl" />
      <div className="h-auto w-[200px] bg-orange-100 rounded-bl-xl" > {/*Sidebar*/}
        <ul className="h-auto w-full p-0"> {/*SidebarList*/}
          {SidebarData.map((val, key)=> {
            return(
              <li key={key} className="w-full h-[50px] list-none m-0 flex flex-row justify-center items-center hover:bg-orange-50 hover:pointer cursor-pointer" onClick={()=> {window.location.pathname = val.link}}> {/*Row*/}
                {" "}
                <div className="flex basis=[30%]">{val.icon}</div>{" "}
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
  )
}

export default Sidebar