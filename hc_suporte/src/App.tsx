import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Homepage from "./pages/homepage/homepage";
import SignInAndSignUp from "./pages/sign_in_and_sign_up/sign_in_and_sign_up";
import RegisterCellphone from "./pages/register_cellphone/register_cellphone";
import Problem from "./pages/problem/problem";
import ServiceOrders from "./pages/services_orders/service_orders";
import Clients from "./admin/pages/clients/clients";
import Services from "./admin/pages/services/services";

function App() {
  return (
    <div className="bg-[#0a191e]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/logar" element={<SignInAndSignUp signIn={true} />} />
          <Route
            path="/criar_conta"
            element={<SignInAndSignUp signIn={false} />}
          />
          <Route path="/registrar" element={<RegisterCellphone />} />
          <Route path="/problema" element={<Problem />} />
          <Route path="/ordem_servicos" element={<ServiceOrders />} />
          <Route path="/admin/clientes" element={<Clients />} />
          <Route path="/admin/servicos" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
