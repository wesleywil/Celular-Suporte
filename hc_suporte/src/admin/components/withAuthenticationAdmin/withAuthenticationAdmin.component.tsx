import { useEffect, ComponentType } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import Loading from "../loading/loading.component";

import { AiFillWarning } from "react-icons/ai";

function WithAuthenticationAdmin<T>(
  Component: ComponentType<T>,
  hocProps?: any
) {
  const user_id = useSelector((state: RootState) => state.account.uid);
  const admin = useSelector((state: RootState) => state.account.admin);
  useEffect(() => {
    console.log("ADMIN DENTRO DO WITH AUTHENTICATION=> ", admin);
  }, [user_id]);
  if (user_id === "idle") {
    return <Loading />;
  } else {
    if (user_id !== "" && admin) {
      return <Component {...hocProps} />;
    } else {
      return (
        <div className="h-screen ">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-[#d9b55d] text-6xl animate-pulse">
              <AiFillWarning />
            </div>
            <div className="text-white flex flex-col gap-2  text-center text-2xl">
              <h1>Você não tem permissão para estar aqui!</h1>
              <h2 className="text-xl">Volte imediatamente</h2>
              <Link
                to="/"
                className="w-1/2 mx-auto font-bold bg-[#d9b55d] text-[#0a191e] px-2 py-1 rounded-xl"
              >
                Homepage
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default WithAuthenticationAdmin;
