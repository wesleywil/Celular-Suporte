import HomepageButton from "../../components/homepage_button/homepage_button.component";

const Homepage = () => {
  return (
    <div className="h-screen text-[#d9b55d] font-bold flex flex-col justify-between items-center p-4">
      <div className="flex flex-col items-center pb-2 border-b-2 border-[#4b9978]">
        <h1 className="text-8xl ">HC</h1>
        <h2 className="text-4xl text-center font-semibold">
          Suporte Técnico de Celulares
        </h2>
      </div>

      <img
        src="https://dummyimage.com/250x250"
        alt="company's logo"
        className="mt-8 p-2 rounded-full"
      />
      <div className="w-2/3 flex flex-col gap-2 items-center ">
        <HomepageButton name="Criar Conta" />
        <HomepageButton name="Logar" />
      </div>
      <div className="w-full mt-2 border-b-2 border-b-2 border-[#4b9978]"></div>
    </div>
  );
};

export default Homepage;
