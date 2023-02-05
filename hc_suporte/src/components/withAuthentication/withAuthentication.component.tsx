import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { useEffect, ComponentType } from "react";

import Loading from "../../admin/components/loading/loading.component";

function WithAuthentication<T>(Component: ComponentType<T>, hocProps?: any) {
  const user_id = useSelector((state: RootState) => state.account.user_id);
  const admin = useSelector((state: RootState) => state.account.admin);
  useEffect(() => {}, [user_id]);
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
    if (user_id !== "") {
      return <Component {...hocProps} />;
    } else {
      return <Navigate to="/logar" replace={true} />;
    }
  }
}

export default WithAuthentication;
