import React from "react";
import assets from "../assets/assets";

const services = [
  {
    title: "Data Analysis",
    description: "Precision Analysis, Powerful Outcomes.",
    image: assets.data_analysis, // Replace with actual image URL
    background: "bg-[#284A72]", // Custom background
  },
  {
    title: "AI Integration",
    description: "The Future is Intelligent—Join the Evolution.",
    image: assets.ai, // Replace with actual image URL
    background: "bg-[#5C48B6]", // Custom background
  },
  {
    title: "Website Design & Development",
    description: "Where Creativity Meets Code.",
    image: assets.web_design, // Replace with actual image URL
    background: "bg-[#515589]", // Custom background
  },
  {
    title: "Digital Marketing",
    description: "Marketing That Speaks to Your Audience.",
    image: assets.digital_marketing, // Replace with actual image URL
    background: "bg-[#2D64A1]", // Custom background
  },
  {
    title: "Training & Support",
    description: "Training Minds, Supporting Journeys.",
    image: assets.training, // Replace with actual image URL
    background: "bg-[#631E87]", // Custom background
  },
  {
    title: "Mobile Application Development",
    description: "Apps that Engage, Innovate, and Perform.",
    image: assets.mobile_app, // Replace with actual image URL
    background: "bg-[#0B5266]", // Custom background
  },
];

const ServicesSection = () => {
  return (
    <div
      className="py-12 px-4"
      style={{
        background: "linear-gradient(to bottom, #f9f9f9, #e6e6e6)",
      }}
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Our Services
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className={`p-4 ${service.background}`}>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-white mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
