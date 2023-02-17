import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { registerCellphone } from "../../firebase/cellphone/cellphone_config";

import FormButton from "../form_button/form_button.component";

interface CustomElements extends HTMLFormControlsCollection {
  brand: HTMLInputElement;
  model: HTMLInputElement;
  color: HTMLInputElement;
  uid: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const FormCellphone = () => {
  const navigate = useNavigate();
  const user_id = useSelector((state: RootState) => state.account.uid);

  useEffect(() => {}, [user_id]);

  const handleSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    console.log("Creating new cellphone register");
    const target = e.currentTarget.elements;

    const data = {
      brand: target.brand.value,
      model: target.model.value,
      color: target.color.value,
      uid: user_id,
    };
    registerCellphone(data);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="xl:w-1/2 mx-auto text-2xl xl:text-4xl text-black"
    >
      <label className="xl:text-2xl text-xl text-[#d9b55d]">Marca</label>
      <input
        type="text"
        name="brand"
        placeholder="EX:Apple, Samsung, Etc..."
        className="w-full rounded-xl px-2"
      />
      <label className="xl:text-2xl text-xl text-[#d9b55d]">Modelo</label>
      <input
        type="text"
        name="model"
        placeholder="EX:Iphone 8s, Galaxy S10, ETC..."
        className="w-full rounded-xl px-2"
      />
      <label className="xl:text-2xl text-xl text-[#d9b55d]">Cor</label>
      <input
        type="text"
        name="color"
        placeholder="EX:Preto, Prata, Branco"
        className="w-full rounded-xl px-2"
      />
      <div className="flex gap-2 justify-center mt-2 xl:mt-8">
        <FormButton name="Registrar" type="submit" />
        <FormButton name="Cancelar" type="button" />
      </div>
    </form>
  );
};

export default FormCellphone;
