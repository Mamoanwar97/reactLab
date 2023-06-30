import { FormButton } from "../../atoms/FormButton";
import {
  PhaseBackground,
  PhaseFooter,
  PhaseTitle,
} from "../../atoms/Phase.styles";
import { useAppDispatch } from "../../contexts/appContext";
import { Funds } from "../../models/Funds";
import { FundsForm } from "./FundsForm";
import { FUNDS_FORM_ID } from "./shared";

export const CalculatingFunds = () => {
  const dispatch = useAppDispatch();

  const setFunds = (funds: Funds) => {
    dispatch({
      type: "ADD_FUNDS",
      payload: funds,
    });
  };

  return (
    <PhaseBackground>
      <PhaseTitle>Calculating funds</PhaseTitle>
      <FundsForm setFunds={setFunds} />
      <PhaseFooter>
        <FormButton form={FUNDS_FORM_ID}>clcik</FormButton>
      </PhaseFooter>
    </PhaseBackground>
  );
};
