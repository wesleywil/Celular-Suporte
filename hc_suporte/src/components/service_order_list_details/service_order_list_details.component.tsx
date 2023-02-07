import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { switch_problem_details_view } from "../../redux/client/client";
import ServiceOrderItem from "../service_order_item/service_order_item.component";

const ServiceOrderListDetails = () => {
  const problems = useSelector(
    (state: RootState) => state.problems.selected_problems
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="centered z-10 w-11/12 max-h-screen pb-4 bg-[#0a191e]/60 backdrop-blur-sm	 border border-[#d9b55d] overflow-x-hidden overflow-y-auto rounded-xl ">
      <div className="w-full flex justify-between bg-[#4b9978] mb-2">
        <span className="self-center font-bold pl-2">Detalhes</span>
        <button
          onClick={() => dispatch(switch_problem_details_view())}
          className="flex-none px-2 bg-white text-red-500 active:opacity-60 font-bold rounded-full mr-2 my-1"
        >
          X
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {problems?.length ? (
          problems?.map((item, i) => <ServiceOrderItem key={i} />)
        ) : (
          <h1 className="text-center text-white">NADA REGISTRADO</h1>
        )}
      </div>
    </div>
  );
};

export default ServiceOrderListDetails;
