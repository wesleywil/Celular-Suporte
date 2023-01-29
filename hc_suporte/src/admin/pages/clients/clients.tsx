import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { switch_client_list_view } from "../../../redux/admin/admin";

import InfoItem from "../../components/info_item/info_item.component";
import ItemList from "../../components/item_list/item_list.component";
import ClientItem from "../../components/client_item/client_item.component";
import AdminMenu from "../../components/admin_menu/admin_menu.component";

const Clients = () => {
  const list_view_hidden = useSelector(
    (state: RootState) => state.admin.client_list_hidden
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="min-h-full h-screen p-2">
      <AdminMenu />
      {list_view_hidden ? (
        ""
      ) : (
        <ItemList
          title="Lista de Clientes"
          action={() => dispatch(switch_client_list_view())}
        >
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
        </ItemList>
      )}

      <h1 className="text-4xl text-white text-center font-bold pt-2">
        Clientes
      </h1>
      <div className="h-5/6 flex flex-col gap-4  justify-center items-center">
        <InfoItem
          title="Clientes Cadastrados"
          quantity={30}
          action={() => dispatch(switch_client_list_view())}
        />
        <InfoItem
          title="Clientes com Serviços"
          quantity={10}
          action={() => dispatch(switch_client_list_view())}
        />
      </div>
    </div>
  );
};

export default Clients;
