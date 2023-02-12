import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { switch_client_list_view } from "../../../redux/admin/admin";
import {
  set_open_problems,
  set_inProgress_problems,
  set_closed_problems,
  set_selected_problems,
} from "../../../redux/problems/problems";
import { listProblemsByStatus } from "../../../firebase/problem/problem_config";

import InfoItem from "../../components/info_item/info_item.component";
import ItemList from "../../components/item_list/item_list.component";
import ServiceItem from "../../components/service_item/service_item.component";
import AdminMenu from "../../components/admin_menu/admin_menu.component";
import ServiceInfo from "../../components/service_info/service_info.component";

const Services = () => {
  const list_view_hidden = useSelector(
    (state: RootState) => state.admin.client_list_hidden
  );
  const service_view_hidden = useSelector(
    (state: RootState) => state.admin.service_info_hidden
  );
  const open = useSelector((state: RootState) => state.problems.open_problems);
  const inProgress = useSelector(
    (state: RootState) => state.problems.inProgress_problems
  );
  const closed = useSelector(
    (state: RootState) => state.problems.closed_problems
  );

  const problems = useSelector(
    (state: RootState) => state.problems.selected_problems
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleProblemsListView = (data: any) => {
    dispatch(switch_client_list_view());
    dispatch(set_selected_problems(data));
  };

  useEffect(() => {
    console.log("Useeffect Problems Admin ");
    listProblemsByStatus("open").then((data) => {
      dispatch(set_open_problems(data));
    });
    listProblemsByStatus("in_progress").then((data) => {
      dispatch(set_inProgress_problems(data));
    });
    listProblemsByStatus("closed").then((data) => {
      dispatch(set_closed_problems(data));
    });
  }, []);

  return (
    <div className="min-h-full h-screen p-2">
      <AdminMenu />
      {service_view_hidden ? "" : <ServiceInfo />}

      {list_view_hidden ? (
        ""
      ) : (
        <ItemList
          title="List de Serviços"
          action={() => dispatch(switch_client_list_view())}
        >
          {problems!.length
            ? problems?.map((item: any, i: number) => (
                <ServiceItem
                  key={i}
                  created_at={item.created_at}
                  cellphone={item.cellphone}
                />
              ))
            : ""}
        </ItemList>
      )}
      <h1 className="text-4xl text-white text-center font-bold pt-2">
        Serviços
      </h1>
      <div className="h-5/6 flex flex-col gap-4 justify-center items-center">
        <InfoItem
          title="A ser aprovados/recusados"
          quantity={open!.length}
          action={() => {
            handleProblemsListView(open);
          }}
        />
        <InfoItem
          title="em aberto"
          quantity={inProgress!.length}
          action={() => {
            handleProblemsListView(inProgress);
          }}
        />
        <InfoItem
          title="finalizados"
          quantity={closed!.length}
          action={() => {
            handleProblemsListView(closed);
          }}
        />
      </div>
    </div>
  );
};

export default Services;
