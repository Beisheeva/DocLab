import React from "react";
import { Link } from "react-scroll";
import img from "../assets/img/map_footer.png";
import Footer_bg from "../assets/img/footer_bg.png";

const Footer = () => {
  return (
    <div className="bg-[url('assets/img/footer_bg.png')] bg-no-repeat bg-cover opacity-100 text-white mt-8 md:mt-0">

      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4 h-96">
          <h1 className=" font-semibold text-xl pb-4">DOCLAB</h1>
          
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Адрес: ул. Малдыбаева 24Б, Бишкек
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              Телефон: +996 123 45 67 89
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              Электронная почта: info@doclab.com
            </Link>
          </nav>

        </div>
        
        <div className=" w-full md:w-2/4">

          <img className="flag px-4" src={img} alt="img" />
          
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
        ©2024. Кыргызстан, Бишкек | DocLab Pathological Laboratory | Developed by students Salymbekov University
        </p>
      </div>
    </div>
  );
};

export default Footer;

