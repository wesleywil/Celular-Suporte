import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { useEffect, ComponentType } from "react";

import Loading from "../../admin/components/loading/loading.component";

function WithAuthentication<T>(Component: ComponentType<T>, hocProps?: any) {
  const user_id = useSelector((state: RootState) => state.account.uid);
  const admin = useSelector((state: RootState) => state.account.admin);
  useEffect(() => {}, [user_id]);
  if (user_id === "idle") {
    return <Loading />;
  } else {
    if (user_id !== "") {
      if (admin === "idle") {
        return <Loading />;
      } else {
        return <Component {...hocProps} />;
      }
    } else {
      return <Navigate to="/logar" replace={true} />;
    }
  }
}
export default WithAuthentication;
