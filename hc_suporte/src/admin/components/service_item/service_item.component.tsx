import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { switch_service_info_view } from "../../../redux/admin/admin";
import { convertDate } from "../../../utils/utils";

import { FaInfo } from "react-icons/fa";

type ServiceItemProps = {
  created_at: any;
  cellphone: string;
};

const ServiceItem = ({ created_at, cellphone }: ServiceItemProps) => {
  const date = new Date(created_at.toDate());
  const convertedDate = convertDate(date);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Date Useeffect");
  }, [date]);

  return (
    <div className="flex gap-4 justify-between bg-[#4b9978] px-1 py-2 rounded-xl">
      <div className="pl-2 font-semibold text-white flex flex-col gap-1">
        <h1>{convertedDate}</h1>
        <h1>{cellphone}</h1>
      </div>
      <button
        onClick={() => dispatch(switch_service_info_view())}
        className="self-center bg-[#d9b55d] active:opacity-70 text-2xl p-1 rounded-full "
      >
        <FaInfo />
      </button>
    </div>
  );
};

export default ServiceItem;
