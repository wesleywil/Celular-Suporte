type InfoItemProps = {
  title: string;
  quantity: number;
  action: any;
};

const InfoItem = ({ title, quantity, action }: InfoItemProps) => {
  return (
    <div className="self-center w-full p-2 bg-[#4b9978] text-center text-[#0a191e] text-2xl rounded-xl">
      <h3 className="font-bold">{title}</h3>
      <h1 className="w-10  h-10 mx-auto font-semibold text-white border-2 border-white rounded-full ">
        {quantity}
      </h1>
      <button
        onClick={action}
        className="bg-[#0a191e] text-white active:opacity-80 px-2 py-1 rounded-xl mt-2"
      >
        Ver lista
      </button>
    </div>
  );
};

export default InfoItem;
