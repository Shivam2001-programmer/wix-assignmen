import React from "react";

const About = () => {
  return (
    <div className="bg-blue-200 container mx-auto p-16 text-center">
      <h1 className=" text-4xl text-blue-950">ABOUT US</h1>
      <p className="text-center p-6 text-base leading-6 ">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </p>
      <p className="text-center p-6 text-base leading-6">
        ​ This is a great space to write a long text about your company and your
        services. You can use this space to go into a little more detail about
        your company. Talk about your team and what services you provide. Tell
        your visitors the story of how you came up with the idea for your
        business and what makes you different from your competitors. Make your
        company stand out and show your visitors who you are.
      </p>
      <button className="bg-blue-950 text-white  py-2 px-4 rounded hover:bg-blue-700">
        Learn More
      </button>
    </div>
  );
};

export default About;
