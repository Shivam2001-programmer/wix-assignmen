import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">JAMES CONSULTING</h2>
          <address className="not-italic">
            500 Terry Francine Street,
            <br />
            San Francisco, CA 94158
            <br />
            <a href="mailto:info@mysite.com" className="text-blue-300">
              info@mysite.com
            </a>
            <br />
            <a href="tel:123-456-7890" className="text-blue-300">
              123-456-7890
            </a>
          </address>
        </div>
        {/* Menu */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">MENU</h2>
          <ul>
            <li>
              <a href="#" className="text-blue-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Plans & Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Tools & Tips
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Social Links */}
        <div className="mb-6 md:mb-0 text-center md:text-right">
          <h2 className="text-lg font-bold">SOCIALS</h2>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-blue-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p className="text-sm mt-4">
            &copy; 2035 by JAMES CONSULTING.
            <br />
            Powered and secured by{" "}
            <a href="https://www.wix.com" className="text-blue-300">
              Wix
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
