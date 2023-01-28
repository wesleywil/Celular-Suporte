import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { switch_client_list_view } from "../../../redux/admin/admin";

import ClientItem from "../client_item/client_item.component";

const ClientList = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="centered z-10 w-full h-screen pb-4 bg-[#0a191e]/60 backdrop-blur-sm	 border border-[#d9b55d] overflow-x-hidden overflow-y-auto rounded-xl">
      <div className="w-full flex justify-between bg-[#4b9978] mb-2">
        <span className="self-center font-bold pl-2">Lista de Clientes</span>
        <button
          onClick={() => dispatch(switch_client_list_view())}
          className="flex-none px-2 bg-white text-red-500 active:opacity-60 font-bold rounded-full mr-2 my-1"
        >
          X
        </button>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <ClientItem />
        <ClientItem />
        <ClientItem />
        <ClientItem />
      </div>
    </div>
  );
};

export default ClientList;
