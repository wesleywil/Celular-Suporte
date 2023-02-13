import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { switch_service_info_view } from "../../../redux/admin/admin";
import { set_selected_problem } from "../../../redux/problems/problems";

import { convertDate } from "../../../utils/utils";

import { FaInfo } from "react-icons/fa";

type ServiceItemProps = {
  data: any;
};

const ServiceItem = ({ data }: ServiceItemProps) => {
  const date = new Date(data.created_at.toDate());
  const convertedDate = convertDate(date);
  const dispatch = useDispatch<AppDispatch>();

  const handleServiceInfoView = (item: any) => {
    dispatch(switch_service_info_view());
    dispatch(set_selected_problem(item));
  };

  useEffect(() => {
    console.log("Date Useeffect");
  }, [date]);

  return (
    <div className="flex gap-4 justify-between bg-[#4b9978] px-1 py-2 rounded-xl">
      <div className="pl-2 font-semibold text-white flex flex-col gap-1">
        <h1>{convertedDate}</h1>
        <h1>{data.cellphone}</h1>
      </div>
      <button
        onClick={() => handleServiceInfoView(data)}
        className="self-center bg-[#d9b55d] active:opacity-70 text-2xl p-1 rounded-full "
      >
        <FaInfo />
      </button>
    </div>
  );
};

export default ServiceItem;
