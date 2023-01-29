import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { switch_client_list_view } from "../../../redux/admin/admin";

import InfoItem from "../../components/info_item/info_item.component";
import ItemList from "../../components/item_list/item_list.component";
import ServiceItem from "../../components/service_item/service_item.component";
import AdminMenu from "../../components/admin_menu/admin_menu.component";

const Services = () => {
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
          title="List de Serviços"
          action={() => dispatch(switch_client_list_view())}
        >
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </ItemList>
      )}
      <h1 className="text-4xl text-white text-center font-bold pt-2">
        Serviços
      </h1>
      <div className="h-5/6 flex flex-col gap-4 justify-center items-center">
        <InfoItem
          title="A ser aprovados/recusados"
          quantity={2}
          action={() => dispatch(switch_client_list_view())}
        />
        <InfoItem
          title="em aberto"
          quantity={1}
          action={() => dispatch(switch_client_list_view())}
        />
        <InfoItem
          title="finalizados"
          quantity={3}
          action={() => dispatch(switch_client_list_view())}
        />
      </div>
    </div>
  );
};

export default Services;
