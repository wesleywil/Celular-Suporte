import FormCellphone from "../../components/form_cellphone/form_cellphone.component";

const RegisterCellphone = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-2">
      <div className="self-center mt-2 p-4 text-3xl text-[#d9b55d]">
        <h1 className="text-center mb-2 pb-2 border-b-2 border-[#d9b55d]">
          Registrar Celular
        </h1>
        <FormCellphone />
      </div>
    </div>
  );
};

export default RegisterCellphone;
