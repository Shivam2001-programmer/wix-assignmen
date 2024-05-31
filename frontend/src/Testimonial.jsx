import React, { useState } from "react";

const testimonials = [
  {
    text: "I'm a testimonial. Click to edit me and add text services.",
    position: "Operations Manager",
    name: "Sima Patel",
  },
  {
    text: "This is another testimonial. Great service and support!",
    position: "CEO",
    name: "John Doe",
  },
  {
    text: "Highly recommend their services.",
    position: "Marketing Head",
    name: "Jane Smith",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-16">
      <h2 className="text-3xl text-center text-blue-950 ">TESTIMONIALS</h2>
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg  max-w-xl w-full text-center relative">
        <p className="text-lg md:text-xl italic mb-4">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="font-semibold text-blue-950">
          {testimonials[currentIndex].position}
        </p>
        <p className="text-gray-500">{testimonials[currentIndex].name}</p>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={handlePrev} className="p-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={handleNext} className="p-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-indigo-950" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
