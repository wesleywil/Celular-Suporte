import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { switch_service_info_view } from "../../../redux/admin/admin";
import { getUserInfo } from "../../../firebase/user/user_config";

import { convertDate } from "../../../utils/utils";

const ServiceInfo = () => {
  const selected_problem = useSelector(
    (state: RootState) => state.problems.selected_problem
  );
  const dispatch = useDispatch<AppDispatch>();
  const t: any = selected_problem!.created_at;
  const date = new Date(t.toDate());
  const convertedDate = convertDate(date);
  const [client, setClient] = useState({
    displayName: "",
    cellphone: "",
    email: "",
  });

  useEffect(() => {
    console.log("service info admin");
    getUserInfo(selected_problem!.uid).then((data: any) => {
      setClient(data);
    });
  }, [selected_problem]);

  return (
    <div className="centered z-20 w-full h-screen pb-4 bg-[#0a191e]/60 backdrop-blur-sm	 border border-[#d9b55d] overflow-x-hidden overflow-y-auto rounded-xl">
      <div className="w-full flex justify-between bg-[#4b9978] mb-2">
        <span className="self-center font-bold pl-2">Info sobre Serviço</span>
        <button
          onClick={() => dispatch(switch_service_info_view())}
          className="flex-none px-2 bg-white text-red-500 active:opacity-60 font-bold rounded-full mr-2 my-1"
        >
          X
        </button>
      </div>
      <div className="p-2 text-xl text-white flex flex-col gap-2 items-center">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-3xl font-semibold">Data Agendada</h1>
          <h2>{convertedDate}</h2>
        </div>
        <div className="form-control border-2 border-[#d9b55d] w-full p-2 rounded-xl">
          <label className="flex flex-col gap-2 items-center">
            <span className="self-center">Recusar/Aceitar</span>
            <input
              type="checkbox"
              className="self-center toggle toggle-success"
            />
          </label>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold">Cliente</h1>
          <h2>{client.displayName}</h2>
          <h2>{client.email}</h2>
          <h2>{client.cellphone}</h2>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Aparelho</h1>
          <h2>{selected_problem?.cellphone}</h2>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Problema</h1>
          <p className="text-base">{selected_problem?.problem}</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#4b9978] active:opacity-70 text-2xl px-2 font-bold rounded-xl">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
