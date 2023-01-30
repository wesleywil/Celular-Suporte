import FormButton from "../form_button/form_button.component";
import { useNavigate } from "react-router-dom";

interface CustomElements extends HTMLFormControlsCollection {
  displayName: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  password2: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

import { handleSignUp } from "../../firebase/config";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    console.log("Creating new User");
    const target = e.currentTarget.elements;

    if (target.password.value !== target.password2.value) {
      alert("Senhas não são iguais!");
    } else {
      const data = {
        displayName: target.displayName.value,
        email: target.email.value,
        password: target.password.value,
      };
      handleSignUp(data);
      navigate("/");
    }
  };
  return (
    <div className="self-center mt-2 p-4 text-3xl text-[#d9b55d]">
      <h1 className="mb-2 text-center">Novo Registro</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 text-2xl text-black"
      >
        <input
          type="text"
          name="displayName"
          placeholder="Nome"
          className="rounded-xl px-2"
        />
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
        <input
          type="password"
          name="password2"
          placeholder="Confirmar Senha"
          className="rounded-xl px-2"
        />
        <div className="flex gap-2 justify-center mt-2">
          <FormButton name="Criar" type="submit" />
          <FormButton name="Cancelar" type="button" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
