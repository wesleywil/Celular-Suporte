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
      className="flex flex-col gap-2 text-2xl text-black"
    >
      <label className="text-xl text-[#d9b55d]">Marca</label>
      <input
        type="text"
        name="brand"
        placeholder="EX:Apple, Samsung, Etc..."
        className="rounded-xl px-2"
      />
      <label className="text-xl text-[#d9b55d]">Modelo</label>
      <input
        type="text"
        name="model"
        placeholder="EX:Iphone 8s, Galaxy S10, ETC..."
        className="rounded-xl px-2"
      />
      <label className="text-xl text-[#d9b55d]">Cor</label>
      <input
        type="text"
        name="color"
        placeholder="EX:Preto, Prata, Branco"
        className="rounded-xl px-2"
      />
      <div className="flex gap-2 justify-center mt-2">
        <FormButton name="Registrar" type="submit" />
        <FormButton name="Cancelar" type="button" />
      </div>
    </form>
  );
};

export default FormCellphone;
