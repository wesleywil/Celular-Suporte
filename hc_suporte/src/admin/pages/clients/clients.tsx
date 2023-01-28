import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

import ClientsItem from "../../components/clients_item/clients_item.component";
import ClientList from "../../components/client_list/client_list.component";

const Clients = () => {
  const list_view_hidden = useSelector(
    (state: RootState) => state.admin.client_list_hidden
  );
  return (
    <div className="min-h-full h-screen p-2">
      {list_view_hidden ? "" : <ClientList />}

      <h1 className="text-4xl text-white text-center font-bold pt-2">
        Clientes
      </h1>
      <div className="h-5/6 flex flex-col gap-4  justify-center items-center">
        <ClientsItem title="Clientes Cadastrados" quantity={30} />
        <ClientsItem title="Clientes com Serviços" quantity={10} />
      </div>
    </div>
  );
};

export default Clients;
