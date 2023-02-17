import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import {
  set_open_problems,
  set_inProgress_problems,
  set_closed_problems,
} from "../../../redux/problems/problems";
import { listProblemsByStatus } from "../../../firebase/problem/problem_config";

import AdminMenu from "../../components/admin_menu/admin_menu.component";
import ServiceInfo from "../../components/service_info/service_info.component";
import ListOfServices from "../../components/list_of_services/list_of_services.component";
import InfoItemContainer from "../../components/info_item_container/info_item_container.component";

const Services = () => {
  const service_view_hidden = useSelector(
    (state: RootState) => state.admin.service_info_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
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

      <ListOfServices />
      <h1 className="text-4xl text-white text-center font-bold pt-2">
        Serviços
      </h1>
      <InfoItemContainer />
    </div>
  );
};

export default Services;
