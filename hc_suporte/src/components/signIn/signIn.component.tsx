import FormButton from "../form_button/form_button.component";

const SignIn = () => {
  return (
    <div className="self-center mt-2 p-4 text-3xl text-[#d9b55d]">
      <h1 className="mb-2 text-center">Login</h1>
      <form className="flex flex-col gap-2 text-2xl text-black">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="rounded-xl px-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="rounded-xl px-2"
        />
        <div className="flex gap-2 justify-center mt-2">
          <FormButton name="Logar" type="submit" />
          <FormButton name="Cancelar" type="button" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
