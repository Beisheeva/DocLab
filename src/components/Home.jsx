import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px32 px-5 text-bgvioletColor bg-[url('assets/img/head_backgr.png')] bg-no-repeat bg-cover opacity-100 bg-bgvioletColor">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Патоморфологическая
          <br /> Лаборатория
        </h1>
        <p>
          Лаборатория оснащена новейшим оборудованием <br/>по стандартам США.</p>
        <div className=" flex flex-col items-center lg:flex-row justify-start	">
          <div>
            <Button title="Зарегистрироваться" />
          </div>
          <h1 className="text-textColor px-4 py-2 rounded-md transition duration-300 ease-in-out">
            Подробнее
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Home;
