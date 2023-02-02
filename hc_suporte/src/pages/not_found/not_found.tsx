import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-screen flex flex-col gap-2 justify-center items-center ">
        <div className="self-center p-4 text-white text-center">
          <div className="mb-2 mx-auto w-fit h-fit p-2 flex justify-center items-center text-6xl text-[#0a191e] bg-[#d9b55d] rounded-full">
            <AiFillWarning />
          </div>
          <h1 className="text-3xl mb-2">PAGINA NÃO ENCONTRADA</h1>
          <Link
            to="/"
            className="font-bold text-[#0a191e] bg-[#d9b55d] active:opacity-90 px-2 py-1 rounded-xl"
          >
            Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
