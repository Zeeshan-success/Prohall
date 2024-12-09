import React from "react";

const Menu = () => {
  const navlist = [
    "Blog",
    "Products Categories",
    "Hair",
    "Prohall",
    "Mask",
    "About",
  ];
  return (
    <>
      <div className=" relative top-4  ">
        <div className="flex justify-center bg-black z-50 w-60 md:w-1/3 py-5 rounded-lg  absolute  right-3  text-white">
          <ul className="  text-center space-y-4 ">
            {navlist.map((item, index) => (
              <li key={index} className="hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
