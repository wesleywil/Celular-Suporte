import { useEffect, ComponentType } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { Navigate } from "react-router-dom";
import Loading from "../loading/loading.component";

function WithAuthenticationAdmin<T>(
  Component: ComponentType<T>,
  hocProps?: any
) {
  const user_id = useSelector((state: RootState) => state.account.uid);
  const admin = useSelector((state: RootState) => state.account.admin);
  useEffect(() => {
    console.log("AAAAAH=> ", admin);
  }, [user_id, admin]);
  if (admin === "idle") {
    return (
      <div className="h-screen">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="self-center">
            <Loading />
          </div>
          <h1 className="text-white">Carregando...</h1>
        </div>
      </div>
    );
  } else {
    if (user_id !== "" && admin === "true") {
      return <Component {...hocProps} />;
    } else {
      return <Navigate to="/logar" replace={true} />;
    }
  }
}

export default WithAuthenticationAdmin;
