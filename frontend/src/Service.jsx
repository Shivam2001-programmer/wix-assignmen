import React from "react";

const Service = () => {
  return (
    <div className="container mx-auto pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 animate-slideInUp">
          <h2 className="text-3xl  mb-4">SERVICES</h2>
          <p className="mb-6 text-base">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700">
            More Info
          </button>
        </div>
        <div className="text-center p-6 animate-slideInUp">
          <h2 className="text-3xl mb-4">PROJECTS</h2>
          <p className="mb-6 text-base">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700">
            More Info
          </button>
        </div>
        <div className="text-center p-6 animate-slideInUp">
          <h2 className="text-3xl mb-4">CLIENTS</h2>
          <p className="mb-6 text-base">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
