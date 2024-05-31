import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950">
      <form className="w-full max-w-lg bg-blue-950 p-8 rounded-lg ">
        <h2 className="text-3xl  text-white mb-6 text-center">CONTACT</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="first-name"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email *
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="subject"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="message"
          >
            Message *
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="message"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-white text-blue-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-100"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
