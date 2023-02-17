import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { listCellphonesByUserId } from "../../firebase/cellphone/cellphone_config";
import { registerProblem } from "../../firebase/problem/problem_config";

import FormButton from "../form_button/form_button.component";

interface CustomElements extends HTMLFormControlsCollection {
  cellphone: HTMLInputElement;
  problem: HTMLInputElement;
  uid: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const FormProblem = () => {
  const navigate = useNavigate();
  const user_id = useSelector((state: RootState) => state.account.uid);
  const [cellphones, setCellphones]: any = useState([]);

  useEffect(() => {
    listCellphonesByUserId(user_id).then((doc) => {
      setCellphones(doc);
    });
  }, [user_id]);

  const handleSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();

    const target = e.currentTarget.elements;

    const data = {
      cellphone: target.cellphone.value,
      problem: target.problem.value,
      uid: user_id,
    };
    registerProblem(data);
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="xl:w-1/2 mx-auto text-2xl xl:text-4xl text-black"
    >
      <label className="xl:text-2xl text-xl text-[#d9b55d]">
        Selecione Celular
      </label>
      <select name="cellphone" className="w-full rounded-xl px-2">
        {cellphones.map((data: any, i: number) => (
          <option key={i} defaultValue={data.model}>
            {data.brand} - {data.model}
          </option>
        ))}
      </select>
      <label className="xl:text-2xl text-xl text-[#d9b55d]">Problema</label>
      <textarea
        name="problem"
        rows={5}
        placeholder="Ex: a tela esta quebrada, gostaria de troca-la"
        className="w-full rounded-xl px-2"
      ></textarea>
      <div className="flex gap-2 justify-center mt-2">
        <FormButton name="Criar" type="submit" />
        <FormButton name="Cancelar" type="button" />
      </div>
    </form>
  );
};

export default FormProblem;
