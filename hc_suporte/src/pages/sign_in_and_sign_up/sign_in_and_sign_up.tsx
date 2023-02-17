import { useEffect } from "react";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";
import Menu from "../../components/menu/menu.component";

type SignInAndSignUpProps = {
  signIn: boolean;
};

const SignInAndSignUp = ({ signIn }: SignInAndSignUpProps) => {
  useEffect(() => {}, [signIn]);
  return (
    <div className="size_window">
      <Menu />
      <div className="h-screen flex justify-center items-center gap-2">
        <div className="xl:w-1/3">{signIn ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
};

export default SignInAndSignUp;
