import Image from "next/image";
import Img1 from "@/assets/heosectionphotos/1.png";
import Img2 from "@/assets/heosectionphotos/3.png";

const MainPhoto = () => {
  return (
    <>
      <div className=" md:flex rounded-3xl  bg-gradient-to-r from-[#183351] via-[#195683] to-[#18304d] text-white">
        <div className="md:w-1/2 md:px-20 pt-5 content-center  space-y-10">
          <p className="text-3xl md:text-5xl font-semiboldd leading-relaxed ">
            Prohall Select One Formaldehyde-Free Keratin Treatment
          </p>
          <Image src={Img1} alt="this is image" width={150} />
        </div>
        <div className="md:w-1/2  ">
          <Image
            src={Img2}
            alt="his is image"
            className="relative !-bottom-[34]"
          />
        </div>
      </div>
    </>
  );
};

export default MainPhoto;
