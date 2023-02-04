import FormButton from "../form_button/form_button.component";
import { useNavigate } from "react-router-dom";

interface CustomElements extends HTMLFormControlsCollection {
  displayName: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  password2: HTMLInputElement;
  cellphone: HTMLInputElement;
  address: HTMLInputElement;
  district: HTMLInputElement;
  city: HTMLInputElement;
  state: HTMLInputElement;
  zip_code: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

import { handleSignUp } from "../../firebase/user/user_config";

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
        cellphone: target.cellphone.value,
        address: target.address.value,
        district: target.district.value,
        city: target.city.value,
        state: target.state.value,
        zip_code: target.zip_code.value,
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
        <div className="flex flex-col gap-2 p-2 border rounded-xl">
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
        </div>
        <div className="flex flex-col gap-2 p-2 border rounded-xl">
          <input
            type="tel"
            name="cellphone"
            placeholder="Celular para contato"
            className="rounded-xl px-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço com numero"
            className="rounded-xl px-2"
          />
          <input
            type="text"
            name="district"
            placeholder="Bairro"
            className="rounded-xl px-2"
          />
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            className="rounded-xl px-2"
          />
          <input
            type="text"
            name="state"
            placeholder="Estado"
            className="rounded-xl px-2"
          />
          <input
            type="text"
            name="zip_code"
            placeholder="CEP"
            className="rounded-xl px-2"
          />
        </div>

        <div className="flex gap-2 justify-center mt-2">
          <FormButton name="Criar" type="submit" />
          <FormButton name="Cancelar" type="button" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
