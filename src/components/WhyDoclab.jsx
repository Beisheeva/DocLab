import React from "react";
import Button from "../layouts/Button";


const Whydoclab = () => {
     
    return (
      <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 h-140 bg-[url('assets/img/whydoclab.png')] bg-no-repeat bg-cover opacity-100">
        <div className=" flex flex-col items-center lg:flex-row justify-between">
          <div>
            <h1 className=" text-4xl  text-textColor font-semibold text-center lg:text-start ">
               Почему DOCLAB Pathology?
            </h1>
            <p className=" mt-2 text-center text-textColor lg:text-start">
              Наша лаборатория предлагает патологические исследования.
            </p>
          </div>
          
        </div>
        
      </div>
    );
  };
  
  export default Whydoclab;
  