import Image from "next/image";
import Img1 from "@/assets/heosectionphotos/2.png";

const SecondContainer = () => {
  return (
    <>
      <div className="md:flex md:my-10 p-5">
        <div className="md:w-1/2 space-y-10 md:my-auto ">
          <div className="md:w-9/12 md:mx-auto ">
            <p className="text-3xl font-semibold">Step-By-Step Manual</p>
            <p>
              Introduction:Prohall Select One is a professional-grade keratin
              treatment designed to provide salon-quality results at home. It’s
              formaldehyde-free, making it a safer option for smoothing and
              straightening hair. Follow these detailed instructions carefully
              to achieve the best results.
            </p>
          </div>
          <div className="md:w-9/12  md:mx-auto">
            <p className="text-3xl font-semibold">Before You Begin</p>
            <p>
              Important Note:If you have very thin hair, be cautious with the
              heat settings during the ironing process. Thin hair may not
              withstand high temperatures, which are necessary for effective
              straightening. For effective results, follow our instructions
              carefully and opt for aftercare treatments for prolonged results.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src={Img1} alt="this is image" />
        </div>
      </div>
    </>
  );
};

export default SecondContainer;
