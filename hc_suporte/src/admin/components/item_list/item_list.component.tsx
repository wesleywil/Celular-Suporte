type ItemListProps = {
  title: string;
  action: any;
  children: any;
};

const ItemList = ({ title, action, children }: ItemListProps) => {
  return (
    <div className="centered z-10 w-full xl:w-1/2 h-screen pb-4 bg-[#0a191e]/60 backdrop-blur-sm	 border border-[#d9b55d] overflow-x-hidden overflow-y-auto rounded-xl">
      <div className="w-full flex justify-between bg-[#4b9978] mb-2">
        <span className="self-center font-bold pl-2">{title}</span>
        <button
          onClick={action}
          className="flex-none px-2 bg-white text-red-500 active:opacity-60 font-bold rounded-full mr-2 my-1"
        >
          X
        </button>
      </div>
      <div className="flex flex-col gap-4 p-2">{children}</div>
    </div>
  );
};

export default ItemList;
