import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signUp.component";

const SignInAndSignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-2">
      <div className="flex flex-col">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default SignInAndSignUp;
