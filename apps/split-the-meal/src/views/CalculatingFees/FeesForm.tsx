import { useState } from "react";
import { useAppState } from "../../contexts/appContext";
import { Fees } from "../../models/Fees";
import { FEES_FORM_ID } from "./shared";
import { COOLORS } from "../../utils/coolors";

const DELIVERY_INPUT = "delivery";
const TIPS_INPUT = "tips";
const VAT_INPUT = "vat";
const SERVICE_INPUT = "service";
const ACTUAL_COST_INPUT = "actual_cost";
const DISCOUNT_INPUT = "discount";

type FeesFormSchema = {
  [VAT_INPUT]: boolean;
  [SERVICE_INPUT]: boolean;
  [TIPS_INPUT]: number;
  [DELIVERY_INPUT]: number;
  [ACTUAL_COST_INPUT]: number;
  [DISCOUNT_INPUT]: number;
};

type FeesFormProps = {
  setFees(fees: Fees, actualCost?: number): number;
};

export const FeesForm = (props: FeesFormProps) => {
  const { fees } = useAppState();
  const [remainingAmount, setRemainingAmount] = useState(0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const result = Object.fromEntries(formData.entries());

    const feesFormSchema = validateFeesFormSchema(result);

    const remaining = props.setFees(
      {
        delivery: feesFormSchema[DELIVERY_INPUT],
        service: feesFormSchema[SERVICE_INPUT],
        tips: feesFormSchema[TIPS_INPUT],
        vat: feesFormSchema[VAT_INPUT],
        discount: feesFormSchema[DISCOUNT_INPUT],
      },
      feesFormSchema[ACTUAL_COST_INPUT]
    );

    if (remaining === 0) {
      form.reset();
    }

    setRemainingAmount(remaining);
  }

  return (
    <form id={FEES_FORM_ID} onSubmit={(e) => onSubmit(e)}>
      <label>
        <input defaultChecked={fees.vat} type="checkbox" name={VAT_INPUT} />
        VAT
      </label>
      <label>
        <input
          defaultChecked={fees.service}
          type="checkbox"
          name={SERVICE_INPUT}
        />
        service
      </label>
      <input
        defaultValue={fees.delivery}
        name={DELIVERY_INPUT}
        min={0}
        type="number"
        placeholder="enter delivery"
      />
      <input
        defaultValue={fees.discount}
        name={DISCOUNT_INPUT}
        type="number"
        min={0}
        max={100}
        placeholder="enter discount amount"
      />
      <input
        defaultValue={fees.tips}
        name={TIPS_INPUT}
        type="number"
        placeholder="Enter tips"
        min={0}
      />
      <div>
        <p
          style={{
            color: COOLORS.fourth,
            fontSize: "12px",
          }}
        >
          if you want to compare the calculated cost vs the actual cost, please
          add the actual cost
        </p>
        <input
          defaultValue={fees.delivery}
          name={ACTUAL_COST_INPUT}
          type="number"
          placeholder="Enter actual cost"
          min={0}
        />
        <p
          style={{
            color: COOLORS.secondary,
            fontSize: "12px",
            visibility: remainingAmount ? "visible" : "hidden",
          }}
        >
          the Actual cost doesn't match calculated cost <br />
          there is {remainingAmount} remaining
        </p>
      </div>
    </form>
  );
};

function validateFeesFormSchema(
  params: Record<string, unknown>
): FeesFormSchema {
  const hasDeliveryInput = DELIVERY_INPUT in params;
  const hasTipsInput = TIPS_INPUT in params;
  const hasActualCostInput = ACTUAL_COST_INPUT in params;
  const hasDiscountInput = DISCOUNT_INPUT in params;
  const hasServiceInput =
    !(SERVICE_INPUT in params) || params[SERVICE_INPUT] === "true";
  const hasVatInput = !(VAT_INPUT in params) || params[VAT_INPUT] === "true";

  if (
    !(
      hasDeliveryInput &&
      hasTipsInput &&
      hasServiceInput &&
      hasVatInput &&
      hasActualCostInput &&
      hasDiscountInput
    )
  ) {
    throw new Error("Form schema is inCorrect");
  }

  const passedForm = params as Record<keyof FeesFormSchema, string>;

  const resultForm: FeesFormSchema = {
    [VAT_INPUT]: passedForm[VAT_INPUT] === "true",
    [SERVICE_INPUT]: passedForm[SERVICE_INPUT] === "true",
    [TIPS_INPUT]: parseInt(passedForm[TIPS_INPUT]),
    [DELIVERY_INPUT]: parseInt(passedForm[DELIVERY_INPUT]),
    [ACTUAL_COST_INPUT]: parseInt(passedForm[ACTUAL_COST_INPUT]),
    [DISCOUNT_INPUT]: parseInt(passedForm[DISCOUNT_INPUT]),
  };

  return resultForm;
}
