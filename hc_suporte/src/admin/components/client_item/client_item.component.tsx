import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { switch_client_info_view } from "../../../redux/admin/admin";

import { FaInfo } from "react-icons/fa";

const ClientItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex gap-4 justify-between bg-[#4b9978] px-1 py-2 rounded-xl">
      <div className="pl-2 font-semibold text-white flex flex-col gap-1">
        <h1>Nome do cliente</h1>
        <h1>emaildocliente@gmail.com</h1>
      </div>
      <button
        onClick={() => dispatch(switch_client_info_view())}
        className="self-center bg-[#d9b55d] active:opacity-70 text-2xl p-1 rounded-full "
      >
        <FaInfo />
      </button>
    </div>
  );
};

export default ClientItem;
