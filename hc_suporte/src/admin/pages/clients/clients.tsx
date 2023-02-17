import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { switch_client_list_view } from "../../../redux/admin/admin";
import { getAllUsers } from "../../../firebase/user/user_config";

import InfoItem from "../../components/info_item/info_item.component";
import ItemList from "../../components/item_list/item_list.component";
import ClientItem from "../../components/client_item/client_item.component";
import AdminMenu from "../../components/admin_menu/admin_menu.component";
import ClientInfo from "../../components/client_info/client_info.component";

const Clients = () => {
  const list_view_hidden = useSelector(
    (state: RootState) => state.admin.client_list_hidden
  );
  const client_info_hidden = useSelector(
    (state: RootState) => state.admin.client_info_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  const [clients, setClients] = useState([]);

  useEffect(() => {
    console.log("GET ALL USERS");
    if (list_view_hidden) {
      getAllUsers().then((data) => {
        setClients(data);
      });
    }
  }, [list_view_hidden]);

  return (
    <div className="min-h-full h-screen p-2">
      <AdminMenu />
      {client_info_hidden ? "" : <ClientInfo />}

      {list_view_hidden ? (
        ""
      ) : (
        <ItemList
          title="Lista de Clientes"
          action={() => dispatch(switch_client_list_view())}
        >
          {clients.length
            ? clients.map((item: any, i: number) => (
                <ClientItem key={i} data={item} />
              ))
            : ""}
        </ItemList>
      )}

      <h1 className="text-4xl text-white text-center font-bold pt-2">
        Clientes
      </h1>
      <div className="xl:w-1/2 mx-auto h-5/6 flex flex-col gap-4  justify-center items-center">
        <InfoItem
          title="Clientes Cadastrados"
          quantity={clients.length}
          action={() => dispatch(switch_client_list_view())}
        />
      </div>
    </div>
  );
};

export default Clients;
