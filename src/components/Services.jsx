import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
// import background_img from "../assets/img/services_bg.png"

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-textColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-textColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-textColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16   bg-[url('assets/img/services_bg.png')] bg-no-repeat bg-cover opacity-100">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl  text-textColor font-semibold text-center lg:text-start ">
            Услуги
          </h1>
          <p className=" mt-2 text-center text-textColor lg:text-start">
            Наша лаборатория предлагает патологические исследования.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0 text-bgvioletColor">
          <Button title="Увидеть все  ->" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
};

export default Services;
