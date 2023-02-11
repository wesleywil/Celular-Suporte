import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { set_user } from "../../../redux/admin/admin";

import { FaInfo } from "react-icons/fa";

type ClientItemProps = {
  data: any;
};

const ClientItem = ({ data }: ClientItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const showClientInfo = () => {
    dispatch(set_user(data));
  };
  return (
    <div className="flex gap-4 justify-between bg-[#4b9978] px-1 py-2 rounded-xl">
      <div className="pl-2 font-semibold text-white flex flex-col gap-1">
        <h1>{data.displayName}</h1>
        <h1>{data.email}</h1>
      </div>
      <button
        onClick={showClientInfo}
        className="self-center bg-[#d9b55d] active:opacity-70 text-2xl p-1 rounded-full "
      >
        <FaInfo />
      </button>
    </div>
  );
};

export default ClientItem;
