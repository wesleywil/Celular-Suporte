import FormButton from "../form_button/form_button.component";

const FormCellphone = () => {
  return (
    <form className="flex flex-col gap-2 text-2xl text-black">
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
