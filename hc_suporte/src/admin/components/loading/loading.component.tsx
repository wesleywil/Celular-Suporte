import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="self-center">
          <div className="text-white text-6xl animate-spin">
            <AiOutlineLoading3Quarters />
          </div>
        </div>
        <h1 className="text-white">Carregando...</h1>
      </div>
    </div>
  );
};

export default Loading;
