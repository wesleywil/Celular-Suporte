import { useEffect } from "react";

type ItemProps = {
  cellphone: string;
  created_at: any;
  problem: string;
};

import { convertDate } from "../../utils/utils";

const ServiceOrderItem = ({ cellphone, created_at, problem }: ItemProps) => {
  const date = new Date(created_at.toDate());
  const convertedDate = convertDate(date);

  useEffect(() => {
    console.log("Date Useeffect");
  }, [date]);
  return (
    <div className="w-11/12 mx-auto  p-2 flex flex-col gap-1 bg-[#4b9978] rounded-xl">
      <h1 className="text-base font-bold">
        {cellphone} - {convertedDate}
      </h1>
      <p className="text-sm">{problem}</p>
    </div>
  );
};

export default ServiceOrderItem;
