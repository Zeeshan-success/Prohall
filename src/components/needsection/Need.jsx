import Image from "next/image";
import Img1 from "@/assets/whatyouneed/1.png";
import Img2 from "@/assets/whatyouneed/2.png";
import Img3 from "@/assets/whatyouneed/3.png";
import Img4 from "@/assets/whatyouneed/4.png";
import Img5 from "@/assets/whatyouneed/5.png";
import Img6 from "@/assets/whatyouneed/6.png";
import Img7 from "@/assets/whatyouneed/7.png";
import { Details } from "@mui/icons-material";

const Need = () => {
  const needlist = [
    { image: Img1, Details: "Blow dryer" },
    { image: Img2, Details: "Fine comb hair" },
    { image: Img3, Details: "Hair Straightenr" },
    { image: Img5, Details: "Prohall Select One Keratin Treatment" },
    { image: Img6, Details: "Shampoo of your choice" },
    { image: Img7, Details: "Sectioning clips" },
  ];

  return (
    <>
      <p className="text-center text-3xl my-10">What You’ll Need</p>
      <div className="mx-10 flex flex-wrap justify-evenly">
        {needlist.map((item, index) => (
          <div key={index} className="text-center w-32">
            <div className="bg-[#1c74b4] rounded-full p-5 flex content-center ">
              <Image src={item.image} alt="this is image" />
            </div>
            <p>{item.Details}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Need;
