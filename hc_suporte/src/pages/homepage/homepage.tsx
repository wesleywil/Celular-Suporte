import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { clean_user } from "../../redux/account/account";
import { handleLogout } from "../../firebase/user/user_config";

import HomepageButton from "../../components/homepage_button/homepage_button.component";
import Menu from "../../components/menu/menu.component";
import { useEffect } from "react";

import Logo from "../../assets/logo.png";

const Homepage = () => {
  const user_id = useSelector((state: RootState) => state.account.uid);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {}, [user_id]);

  const logout = () => {
    dispatch(clean_user());
    handleLogout();
  };
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Menu />
      <div className="xl:mt-48  text-[#d9b55d] font-bold flex flex-col justify-between items-center p-4">
        <div className=" flex flex-col items-center pb-2 border-b-2 border-[#4b9978]">
          <h1 className="text-8xl xl:text-9xl ">HC</h1>
          <h2 className="text-4xl text-center font-semibold">
            Suporte Técnico de Celulares
          </h2>
        </div>

        <img src={Logo} alt="company's logo" className="mt-8 mb-4" />
        <div className="w-2/3 flex flex-col gap-2 items-center ">
          {user_id === "" ? (
            <>
              {" "}
              <HomepageButton name="Criar Conta" link="/criar_conta" />
              <HomepageButton name="Logar" link="/logar" />
            </>
          ) : (
            <button
              onClick={logout}
              className="w-full xl:w-1/3 text-2xl  py-1 bg-[#d9b55d] active:bg-[#4b9978] text-[#0a191e] active:text-[#d9b55d] rounded-xl transform duration-200 ease-in-out"
            >
              Deslogar
            </button>
          )}
        </div>
        <div className="w-full xl:w-1/4 mt-2 border-b-2 border-b-2 border-[#4b9978]"></div>
      </div>
    </div>
  );
};

export default Homepage;
