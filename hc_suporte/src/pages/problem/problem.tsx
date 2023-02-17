import FormProblem from "../../components/form_problem/form_problem.component";
import Menu from "../../components/menu/menu.component";

const Problem = () => {
  return (
    <div className="h-screen">
      <Menu />
      <div className="xl:mt-36 flex justify-center items-center gap-2">
        <div className="self-center mt-2 p-4 text-3xl text-[#d9b55d]">
          <h1 className="xl:w-1/2 xl:mx-auto text-center mb-2 pb-2 border-b-2 border-[#d9b55d]">
            Registrar Problema
          </h1>
          <FormProblem />
        </div>
      </div>
    </div>
  );
};

export default Problem;
