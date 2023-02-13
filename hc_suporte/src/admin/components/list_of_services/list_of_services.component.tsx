import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { switch_client_list_view } from "../../../redux/admin/admin";

import ItemList from "../item_list/item_list.component";
import ServiceItem from "../service_item/service_item.component";

const ListOfServices = () => {
  const list_view_hidden = useSelector(
    (state: RootState) => state.admin.client_list_hidden
  );
  const problems = useSelector(
    (state: RootState) => state.problems.selected_problems
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {list_view_hidden ? (
        ""
      ) : (
        <ItemList
          title="List de Serviços"
          action={() => dispatch(switch_client_list_view())}
        >
          {problems!.length
            ? problems?.map((item: any, i: number) => (
                <ServiceItem key={i} data={item} />
              ))
            : ""}
        </ItemList>
      )}
    </>
  );
};

export default ListOfServices;
