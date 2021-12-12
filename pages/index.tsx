/* eslint-disable react/jsx-key */
import { services } from "../data";

import ServiceCard from "../components/ServiceCard";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="my-3 text-base font-medium">
        I am a Frontend Developer　 💻　
        <br />I am currently working in Tokyo　🗼
        <br />
        🌱　I’m currently learning everything　😋
        <br /> 🖼　I am interesting in design and user experience 　
        <br />
        🥅　I want to become UX engineer, builds and designs new products
        <br />⚡ Fun fact: training　🏋　, playing game　🎮　and coffee ☕
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 font-bold tracking-wide text-x1">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="col-span-2 bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200 md:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
