import { FormButton } from "../../atoms/FormButton";
import {
  PhaseBackground,
  PhaseFooter,
  PhaseTitle,
} from "../../atoms/Phase.styles";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { Fees } from "../../models/Fees";
import { SERVICE_FEES, VAT_FEES } from "../../utils/global.constants";
import { FeesForm } from "./FeesForm";
import { FEES_FORM_ID } from "./shared";

export const CalculatingFees = () => {
  const appState = useAppState();
  const dispatch = useAppDispatch();

  const setFees = (fees: Fees, actualCost: number = 0) => {
    let remainingFees: number = 0;

    if (actualCost > 0) {
      const totalMealCost = appState.meals.reduce(
        (accumulate, meal) => accumulate + meal.pricePerItem * meal.quantity,
        0
      );

      const serviceCost = fees.service ? SERVICE_FEES : 1;
      const vatCost = fees.vat ? VAT_FEES : 1;
      const costBeforeDiscount =
        totalMealCost + serviceCost + vatCost + fees.delivery;
      const costAfterDiscount =
        (costBeforeDiscount * (100 - fees.discount)) / 100;

      const costWithTips = costAfterDiscount + fees.tips;

      remainingFees = Math.max(actualCost - Math.floor(costWithTips), 0);
    }

    if (remainingFees === 0) {
      dispatch({
        type: "ADD_FEES",
        payload: fees,
      });
    }

    return remainingFees;
  };

  return (
    <PhaseBackground>
      <PhaseTitle>Calculating fees</PhaseTitle>
      <FeesForm setFees={setFees} />
      <PhaseFooter>
        <FormButton form={FEES_FORM_ID}>clcik</FormButton>
      </PhaseFooter>
    </PhaseBackground>
  );
};
