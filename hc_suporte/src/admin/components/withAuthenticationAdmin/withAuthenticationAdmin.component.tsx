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
    console.log("ADMIN DENTRO DO WITH AUTHENTICATION=> ", admin);
  }, [user_id]);
  if (user_id === "idle") {
    return <Loading />;
  } else {
    if (user_id !== "" && admin) {
      return <Component {...hocProps} />;
    } else {
      return <Navigate to="/logar" replace={true} />;
    }
  }
}
export default WithAuthenticationAdmin;
