import React from "react";

import lendo from "../src/assets/lendo.png";
import athos from "../src/assets/athos.webp";
import keno from "../src/assets/keno.jpg";
import dmc from "../src/assets/dmc.jpg";

const Client = () => {
  return (
    <>
      <div className="bg-white container mx-auto p-16 gap-7">
        <h1 className="text-4xl text-blue-950 text-center pt-3">OUR CLIENTS</h1>
        <div className="flex justify-center items-center p-5 mx-auto text-center gap-11">
          <img src={lendo} className="w-30 h-20" />
          <img src={athos} className="w-30 h-20" />
          <img src={keno} className="w-30 h-20" />
          <img src={dmc} className="w-30 h-20" />
        </div>
      </div>
    </>
  );
};

export default Client;
