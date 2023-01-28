import { FaInfo } from "react-icons/fa";

const ServiceItem = () => {
  return (
    <div className="flex gap-4 justify-between bg-[#4b9978] px-1 py-2 rounded-xl">
      <div className="pl-2 font-semibold text-white flex flex-col gap-1">
        <h1>Nome do cliente - 22/02/2023</h1>
        <h1>Iphone 8s</h1>
      </div>
      <button className="self-center bg-[#d9b55d] active:opacity-70 text-2xl p-1 rounded-full ">
        <FaInfo />
      </button>
    </div>
  );
};

export default ServiceItem;
