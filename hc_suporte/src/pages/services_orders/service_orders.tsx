import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { switch_problem_details_view } from "../../redux/client/client";

import Menu from "../../components/menu/menu.component";
import ServiceOrderList from "../../components/service_order_list/service_order_list.component";
import ServiceOrderListDetails from "../../components/service_order_list_details/service_order_list_details.component";

const ServiceOrders = () => {
  const hide_order_list = useSelector(
    (state: RootState) => state.client.problem_details_hidden
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleOrderListView = () => {
    dispatch(switch_problem_details_view());
  };
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
              qtd={2}
              action={() => handleOrderListView()}
            />
            <ServiceOrderList
              name="Em Andamento"
              color="border-yellow-600"
              qtd={0}
              action={() => handleOrderListView()}
            />
            <ServiceOrderList
              name="Finalizados"
              color="border-green-600	"
              qtd={3}
              action={() => handleOrderListView()}
            />
            <ServiceOrderList
              name="Recusados"
              color="border-red-600"
              qtd={0}
              action={() => handleOrderListView()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrders;
