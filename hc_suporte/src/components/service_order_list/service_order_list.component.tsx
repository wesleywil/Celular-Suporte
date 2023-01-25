import { useEffect } from "react";

type ServiceOrderListProps = {
  name: string;
  color: string;
  qtd: number;
};

const ServiceOrderList = ({ name, color, qtd }: ServiceOrderListProps) => {
  useEffect(() => {}, [color]);
  return (
    <div className={`text-xl text-center rounded-xl border ` + color}>
      <h4>{name}</h4>

      <h1 className="mx-auto mb-1 font-bold bg-white text-[#0a191e] w-fit px-2 rounded-full">
        {qtd}
      </h1>

      <div>
        <button className="text-base mb-2 font-semibold px-2 bg-[#4b9978] text-white active:opacity-70 rounded">
          Mais detalhes
        </button>
      </div>
    </div>
  );
};

export default ServiceOrderList;
