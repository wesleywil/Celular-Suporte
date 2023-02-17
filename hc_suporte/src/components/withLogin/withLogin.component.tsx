import { useEffect, ComponentType } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../redux/store";

import Loading from "../../admin/components/loading/loading.component";

function WithLogin<T>(Component: ComponentType<T>, hocProps?: any) {
  const user_id = useSelector((state: RootState) => state.account.uid);

  useEffect(() => {}, [user_id]);

  if (user_id === "idle") {
    return <Loading />;
  } else {
    if (user_id === "") {
      return <Component {...hocProps} />;
    } else {
      return <Navigate to="/" replace={true} />;
    }
  }
}

export default WithLogin;
