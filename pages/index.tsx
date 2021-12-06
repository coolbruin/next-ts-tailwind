/* eslint-disable react/jsx-key */
import { services } from "../data";

import ServiceCard from "../components/ServiceCard";

const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5>
        I am a Frontend Developer　 💻　I am currently working in Tokyo　🗼
        🌱　I’m currently learning everything　😋 🖼　I am interesting in design
        and user experience 🥅　I want to become UX engineer, builds and designs
        new products ⚡ Fun fact: training　🏋　, playing game　🎮　and coffee
        ☕
      </h5>
      <div className="p-4 mt-5 bg-gray-400">
        <h6 className="my-3 font-bold text-x1">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
