import FormButton from "../form_button/form_button.component";
import SelectDay from "../select_day/select_day.component";
import SelectMonth from "../select_month/select_month.component";

const FormProblem = () => {
  return (
    <form className="flex flex-col gap-2 text-2xl text-black">
      <label className="text-xl text-[#d9b55d]">Selecione Celular</label>
      <select className="rounded-xl px-2">
        <option value="01">Cellphone 01</option>
        <option value="02">Cellphone 02</option>
      </select>
      <label className="text-xl text-[#d9b55d]">Problema</label>
      <textarea
        rows={5}
        placeholder="Ex: a tela esta quebrada, gostaria de troca-la"
        className="rounded-xl px-2"
      ></textarea>
      <label className="text-xl text-[#d9b55d]">Reservar Dia</label>
      <div className="flex gap-4 justify-center">
        <SelectMonth />
        <SelectDay />
      </div>
      <div className="flex gap-2 justify-center mt-2">
        <FormButton name="Order" type="submit" />
        <FormButton name="Cancelar" type="button" />
      </div>
    </form>
  );
};

export default FormProblem;
