import FormProblem from "../../components/form_problem/form_problem.component";

const Problem = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-2">
      <div className="self-center mt-2 p-4 text-3xl text-[#d9b55d]">
        <h1 className="text-center mb-2 pb-2 border-b-2 border-[#d9b55d]">
          Registrar Problema
        </h1>
        <FormProblem />
      </div>
    </div>
  );
};

export default Problem;
