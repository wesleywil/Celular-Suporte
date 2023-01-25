import ServiceOrderItem from "../service_order_item/service_order_item.component";

const ServiceOrderListDetails = () => {
  return (
    <div className="centered z-10 w-11/12 max-h-screen pb-4 bg-[#0a191e]/60 backdrop-blur-sm	 border border-[#d9b55d] overflow-x-hidden overflow-y-auto rounded-xl ">
      <div className="w-full flex justify-between bg-[#4b9978] mb-2">
        <span className="self-center font-bold pl-2">Detalhes</span>
        <button className="flex-none px-2 bg-white text-red-500 active:opacity-60 font-bold rounded-full mr-2 my-1">
          X
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <ServiceOrderItem />
        <ServiceOrderItem />
      </div>
    </div>
  );
};

export default ServiceOrderListDetails;
