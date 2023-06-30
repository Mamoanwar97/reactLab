import { useAppState } from "../../contexts/appContext";
import { Funds } from "../../models/Funds";
import { FUNDS_FORM_ID } from "./shared";

type FundsFormProps = {
  setFunds(fund: Funds): void;
};

export const FundsForm = (props: FundsFormProps) => {
  const { funds } = useAppState();

  return (
    <form
      id={FUNDS_FORM_ID}
      onSubmit={(e) => {
        e.preventDefault();
        props.setFunds({ delivery: 0, service: false, tips: 0, vat: false });
      }}
    ></form>
  );
};
