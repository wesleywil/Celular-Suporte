import { useEffect } from "react";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";
import Menu from "../../components/menu/menu.component";

type SignInAndSignUpProps = {
  signIn: boolean;
};

const SignInAndSignUp = ({ signIn }: SignInAndSignUpProps) => {
  useEffect(() => {
    console.log("SignInAndSignUp Effect");
  }, [signIn]);
  return (
    <div className="h-screen">
      <Menu />
      <div className="h-screen flex justify-center items-center gap-2">
        <div className="flex flex-col">{signIn ? <SignIn /> : <SignUp />}</div>
      </div>
    </div>
  );
};

export default SignInAndSignUp;
