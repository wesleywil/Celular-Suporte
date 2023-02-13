import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { switch_client_list_view } from "../../../redux/admin/admin";
import { set_selected_problems } from "../../../redux/problems/problems";

import InfoItem from "../info_item/info_item.component";

const InfoItemContainer = () => {
  const open = useSelector((state: RootState) => state.problems.open_problems);
  const inProgress = useSelector(
    (state: RootState) => state.problems.inProgress_problems
  );
  const closed = useSelector(
    (state: RootState) => state.problems.closed_problems
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleProblemsListView = (data: any) => {
    dispatch(switch_client_list_view());
    dispatch(set_selected_problems(data));
  };

  return (
    <div className="h-5/6 flex flex-col gap-4 justify-center items-center">
      <InfoItem
        title="A ser aprovados/recusados"
        quantity={open!.length}
        action={() => {
          handleProblemsListView(open);
        }}
      />
      <InfoItem
        title="em aberto"
        quantity={inProgress!.length}
        action={() => {
          handleProblemsListView(inProgress);
        }}
      />
      <InfoItem
        title="finalizados"
        quantity={closed!.length}
        action={() => {
          handleProblemsListView(closed);
        }}
      />
    </div>
  );
};

export default InfoItemContainer;
