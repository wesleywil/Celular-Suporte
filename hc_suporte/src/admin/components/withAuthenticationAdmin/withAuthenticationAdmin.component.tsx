import { useEffect, ComponentType } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { Navigate } from "react-router-dom";

function WithAuthenticationAdmin<T>(
  Component: ComponentType<T>,
  hocProps?: any
) {
  const user_id = useSelector((state: RootState) => state.account.user_id);
  const admin = useSelector((state: RootState) => state.account.admin);
  useEffect(() => {
    console.log("AAAAAH=> ", admin);
  }, [user_id, admin]);
  if (admin === "idle") {
    return (
      <h1 className="h-screen w-screen text-white text-4xl">Loading...</h1>
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
