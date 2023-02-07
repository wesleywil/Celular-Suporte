import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { switch_problem_details_view } from "../../redux/client/client";
import {
  set_selected_problems,
  set_open_problems,
  set_inProgress_problems,
  set_closed_problems,
  set_denied_problems,
} from "../../redux/problems/problems";
import { listProblemsByUidAndStatus } from "../../firebase/problem/problem_config";

import Menu from "../../components/menu/menu.component";
import ServiceOrderList from "../../components/service_order_list/service_order_list.component";
import ServiceOrderListDetails from "../../components/service_order_list_details/service_order_list_details.component";

const ServiceOrders = () => {
  const uid = useSelector((state: RootState) => state.account.uid);
  const hide_order_list = useSelector(
    (state: RootState) => state.client.problem_details_hidden
  );
  const open = useSelector((state: RootState) => state.problems.open_problems)!;
  const inProgress = useSelector(
    (state: RootState) => state.problems.inProgress_problems
  )!;
  const closed = useSelector(
    (state: RootState) => state.problems.closed_problems
  )!;
  const denied = useSelector(
    (state: RootState) => state.problems.denied_problems
  )!;

  const dispatch = useDispatch<AppDispatch>();

  const handleOrderListView = (data: any) => {
    dispatch(switch_problem_details_view());
    dispatch(set_selected_problems(data));
  };

  useEffect(() => {
    console.log("Useeffect Service Orders ");
    listProblemsByUidAndStatus(uid, "open").then((doc) => {
      dispatch(set_open_problems(doc));
    });
    listProblemsByUidAndStatus(uid, "in_progress").then((doc) => {
      dispatch(set_inProgress_problems(doc));
    });
    listProblemsByUidAndStatus(uid, "closed").then((doc) => {
      dispatch(set_closed_problems(doc));
    });
    listProblemsByUidAndStatus(uid, "denied").then((doc) => {
      dispatch(set_denied_problems(doc));
    });
  }, [uid]);
  return (
    <div className="">
      <Menu />
      <div className="flex justify-center items-center gap-2">
        {!hide_order_list ? <ServiceOrderListDetails /> : ""}

        <div className="w-full self-center mt-2 p-4 text-3xl text-[#d9b55d] ">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https:dummyimage.com/100x100"
              alt=""
              className="rounded-full"
            />
            <h4 className="mb-2 text-base text-white">Nome do cliente</h4>
          </div>
          <h1 className="text-center mb-2 pb-2 border-b-2 border-[#d9b55d]">
            Ordem de Serviços
          </h1>
          <div className="w-11/12 mx-auto flex flex-col gap-2 ">
            <ServiceOrderList
              name="Em Aberto"
              color="border-gray-200"
              qtd={open.length}
              action={() => handleOrderListView(open)}
            />
            <ServiceOrderList
              name="Em Andamento"
              color="border-yellow-600"
              qtd={inProgress.length}
              action={() => handleOrderListView(inProgress)}
            />
            <ServiceOrderList
              name="Finalizados"
              color="border-green-600	"
              qtd={closed.length}
              action={() => handleOrderListView(closed)}
            />
            <ServiceOrderList
              name="Recusados"
              color="border-red-600"
              qtd={denied.length}
              action={() => handleOrderListView(denied)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrders;
