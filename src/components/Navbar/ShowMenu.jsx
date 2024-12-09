"use client";

import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "./Menu";

const ShowMenu = () => {
  const [show, setshow] = useState("ture");
  const showmenu = () => {
    setshow(!show);
  };

  return (
    <>
      <div className="md:hidden mx-3  flex justify-end " onClick={showmenu}>
        <button className="bg-[#1c74b4] w-10 h-10 flex justify-center items-center text-white rounded-md">
          {show ? <DehazeIcon /> : <CloseIcon />}
        </button>
      </div>
      {show ? null : <Menu />}
    </>
  );
};

export default ShowMenu;
