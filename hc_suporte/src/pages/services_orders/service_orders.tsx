import ServiceOrderList from "../../components/service_order_list/service_order_list.component";
import ServiceOrderListDetails from "../../components/service_order_list_details/service_order_list_details.component";

const ServiceOrders = () => {
  return (
    <div className="min-h-full h-screen flex justify-center items-center gap-2">
      <ServiceOrderListDetails />
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
          <ServiceOrderList name="Em Aberto" color="border-gray-200" qtd={2} />
          <ServiceOrderList
            name="Em Andamento"
            color="border-yellow-600"
            qtd={0}
          />
          <ServiceOrderList
            name="Finalizados"
            color="border-green-600	"
            qtd={3}
          />
          <ServiceOrderList name="Recusados" color="border-red-600" qtd={0} />
        </div>
      </div>
    </div>
  );
};

export default ServiceOrders;
