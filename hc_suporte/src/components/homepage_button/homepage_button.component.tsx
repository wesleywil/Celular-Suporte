import { Link } from "react-router-dom";

type ButtonProp = {
  name: string;
  link: string;
};

const HomepageButton = ({ name, link }: ButtonProp) => {
  return (
    <Link
      to={link}
      className="w-full xl:w-1/3 text-center text-2xl  py-1 bg-[#d9b55d] active:bg-[#4b9978] text-[#0a191e] active:text-[#d9b55d] rounded-xl transform duration-200 ease-in-out"
    >
      {name}
    </Link>
  );
};

export default HomepageButton;
