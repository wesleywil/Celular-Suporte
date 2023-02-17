import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { switch_client_info_view } from "../../../redux/admin/admin";
import { listCellphonesByUserId } from "../../../firebase/cellphone/cellphone_config";

import { FaWhatsapp } from "react-icons/fa";
const ClientInfo = () => {
  const data = useSelector((state: RootState) => state.admin.user_selected);
  const dispatch = useDispatch<AppDispatch>();

  const [cellphones, setCellphones] = useState([]);

  useEffect(() => {
    listCellphonesByUserId(data.uid).then((cellData) => {
      setCellphones(cellData);
    });
  }, [data]);
  return (
    <div className="centered z-20 w-full xl:w-1/2 h-screen pb-4 bg-[#0a191e]/60 backdrop-blur-sm	 border border-[#d9b55d] overflow-x-hidden overflow-y-auto rounded-xl">
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
            <h2>{data.displayName}</h2>
            <h2>{data.email}</h2>
            <h2>{data.cellphone}</h2>
            <h2>
              {data.address}, {data.district},{data.city}-{data.state}
            </h2>
            <h2>{data.zip_code}</h2>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-2">Celular(es)</h1>
          <div className="mx-auto w-11/12 p-2 border rounded-xl">
            {cellphones.length
              ? cellphones.map((item: any, i: number) => (
                  <h2 key={i}>
                    {item.brand} - {item.model}
                  </h2>
                ))
              : ""}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-2">Contato</h1>
          <a
            href={`https://web.whatsapp.com/send?phone=55${data.cellphone}`}
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
