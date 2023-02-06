import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./redux/store";
import { set_user_id, set_user } from "./redux/account/account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserInfo } from "./firebase/user/user_config";

// Styles
import "./App.css";

// Pages
import Homepage from "./pages/homepage/homepage";
import SignInAndSignUp from "./pages/sign_in_and_sign_up/sign_in_and_sign_up";
import RegisterCellphone from "./pages/register_cellphone/register_cellphone";
import Problem from "./pages/problem/problem";
import ServiceOrders from "./pages/services_orders/service_orders";
import Clients from "./admin/pages/clients/clients";
import Services from "./admin/pages/services/services";

// Components
import WithAuthentication from "./components/withAuthentication/withAuthentication.component";
import WithAuthenticationAdmin from "./admin/components/withAuthenticationAdmin/withAuthenticationAdmin.component";
import NotFound from "./pages/not_found/not_found";

function App() {
  const auth = getAuth();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("USER ID =>", user.uid);
        dispatch(set_user_id(user.uid));
        getUserInfo(user.uid).then((data) => {
          console.log("ADMIN ==> ", data?.admin);
          dispatch(set_user(data));
        });
      } else {
        console.log("user is logged out");
      }
    });
  }, [auth]);
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
          <Route
            path="/registrar"
            element={WithAuthentication(RegisterCellphone)}
          />
          <Route path="/problema" element={WithAuthentication(Problem)} />
          <Route
            path="/ordem_servicos"
            element={WithAuthentication(ServiceOrders)}
          />
          <Route
            path="/admin/clientes"
            element={WithAuthenticationAdmin(Clients)}
          />
          <Route
            path="/admin/servicos"
            element={WithAuthenticationAdmin(Services)}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
