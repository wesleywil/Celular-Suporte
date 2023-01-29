import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { switch_client_info_view } from "../../../redux/admin/admin";

import { FaWhatsapp } from "react-icons/fa";
const ClientInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="centered z-20 w-full h-screen pb-4 bg-[#0a191e]/60 backdrop-blur-sm	 border border-[#d9b55d] overflow-x-hidden overflow-y-auto rounded-xl">
      <div className="w-full flex justify-between bg-[#4b9978] mb-2">
        <span className="self-center font-bold pl-2">Cliente Info</span>
        <button
          onClick={() => dispatch(switch_client_info_view())}
          className="flex-none px-2 bg-white text-red-500 active:opacity-60 font-bold rounded-full mr-2 my-1"
        >
          X
        </button>
      </div>
      <div className="flex flex-col gap-2 items-center text-center text-xl text-white">
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-2">Cliente</h1>
          <div className=" mx-auto w-11/12 p-2 border rounded-xl">
            <h2>Nome do Cliente</h2>
            <h2>emaildocliente@gmail.com</h2>
            <h2>(11)99999-9999</h2>
            <h2>Rua onde o cliente mora, 222, Bairro, São Paulo, SP</h2>
            <h2>00000-000</h2>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-2">Celular(es)</h1>
          <div className="mx-auto w-11/12 p-2 border rounded-xl">
            <h2>Apple - Iphone 8s</h2>
            <h2>Apple - Iphone x10</h2>
            <h2>Samsung - Galaxy s20</h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-2">Contato</h1>
          <a
            href="https://web.whatsapp.com/send?phone=5511000000000"
            className="text-7xl p-2 bg-[#4b9978] active:opacity-70 text-white rounded-full"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
