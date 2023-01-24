import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Homepage from "./pages/homepage/homepage";
import SignInAndSignUp from "./pages/sign_in_and_sign_up/sign_in_and_sign_up";
import RegisterCellphone from "./pages/register_cellphone/register_cellphone";

function App() {
  return (
    <div className="h-screen bg-[#0a191e]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/logar" element={<SignInAndSignUp />} />
          <Route path="/registrar" element={<RegisterCellphone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
