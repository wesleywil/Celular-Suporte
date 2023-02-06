import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { listCellphonesByUserId } from "../../firebase/cellphone/cellphone_config";
import { registerProblem } from "../../firebase/problem/problem_config";

import FormButton from "../form_button/form_button.component";
import SelectDay from "../select_day/select_day.component";
import SelectMonth from "../select_month/select_month.component";

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
      console.log(doc);
      setCellphones(doc);
    });
  }, [user_id]);

  const handleSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    console.log("Creating new problem register");
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
      className="flex flex-col gap-2 text-2xl text-black"
    >
      <label className="text-xl text-[#d9b55d]">Selecione Celular</label>
      <select name="cellphone" className="rounded-xl px-2">
        {cellphones.map((data: any, i: number) => (
          <option key={i} defaultValue={data.model}>
            {data.brand} - {data.model}
          </option>
        ))}
      </select>
      <label className="text-xl text-[#d9b55d]">Problema</label>
      <textarea
        name="problem"
        rows={5}
        placeholder="Ex: a tela esta quebrada, gostaria de troca-la"
        className="rounded-xl px-2"
      ></textarea>
      {/* <label className="text-xl text-[#d9b55d]">Reservar Dia</label>
      <div className="flex gap-4 justify-center">
        <SelectMonth />
        <SelectDay />
      </div> */}
      <div className="flex gap-2 justify-center mt-2">
        <FormButton name="Criar" type="submit" />
        <FormButton name="Cancelar" type="button" />
      </div>
    </form>
  );
};

export default FormProblem;
