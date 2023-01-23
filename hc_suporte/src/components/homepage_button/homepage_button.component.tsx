type ButtonProp = {
  name: string;
};

const HomepageButton = ({ name }: ButtonProp) => {
  return (
    <button className="w-full text-2xl  py-1 bg-[#d9b55d] active:bg-[#4b9978] text-[#0a191e] active:text-[#d9b55d] rounded-xl transform duration-200 ease-in-out">
      {name}
    </button>
  );
};

export default HomepageButton;
