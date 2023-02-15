type ServiceInfoCheckboxProps = {
  action: React.ChangeEventHandler<HTMLInputElement>;
  status: string;
};

const ServiceInfoCheckbox = ({ action, status }: ServiceInfoCheckboxProps) => {
  return (
    <div
      className={`form-control border-2 border-[#d9b55d] w-full p-2 rounded-xl ${
        status === "denied" ? "hidden" : status === "closed" ? "hidden" : ""
      }`}
    >
      <label className="flex flex-col gap-2 items-center">
        <span className="self-center">
          {status === "open"
            ? "Recusar/Aceitar"
            : status === "in_progress"
            ? "Não Finalizado/Finalizado"
            : ""}
        </span>
        <input
          onChange={action}
          type="checkbox"
          className="self-center toggle toggle-success"
        />
      </label>
    </div>
  );
};

export default ServiceInfoCheckbox;
