import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { useEffect, ComponentType } from "react";

function WithAuthentication<T>(Component: ComponentType<T>, hocProps?: any) {
  const user_id = useSelector((state: RootState) => state.account.user_id);
  useEffect(() => {}, [user_id]);
  if (user_id !== "") {
    return <Component {...hocProps} />;
  } else {
    return <Navigate to="/logar" replace={true} />;
  }
}

export default WithAuthentication;
