type FormButtonType = {
  name: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const FormButton = ({ name, type }: FormButtonType) => {
  return (
    <button
      type={type}
      className="w-1/3 text-xl font-semibold bg-[#4b9978] text-white active:opacity-80  py-1 rounded transform duration-200 ease-in-out"
    >
      {name}
    </button>
  );
};

export default FormButton;
