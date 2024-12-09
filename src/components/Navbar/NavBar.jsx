import Image from "next/image";
import Img1 from "@/assets/navbarimg1.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShowMenu from "./ShowMenu";

const NavBar = () => {
  const navlist = [
    "Blog",
    "Products Categories",
    "Hair",
    "Prohall",
    "Mask",
    "About",
  ];
  return (
    <div className="w-full bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between rounded-3xl bg-white shadow-lg px-8 py-2">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src={Img1}
            alt="Logo"
            width={120}
            height={50}
            priority
            className="object-contain"
          />
        </div>

        <div className="hidden md:contents">
          {/* Navigation Items */}
          <div className="flex-1">
            <ul className="flex items-center justify-evenly text-gray-700 font-medium">
              {navlist.map((item, index) => (
                <li key={index} className=" hover:text-blue-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown Icon */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <KeyboardArrowDownIcon className="text-gray-600 cursor-pointer" />
          </div>
        </div>
        <div className="w-1/6 md:hidden">
          <ShowMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
