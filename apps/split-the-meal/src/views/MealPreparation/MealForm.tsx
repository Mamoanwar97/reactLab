import { useState } from "react";
import { FormButton } from "../../atoms/FormButton";
import { Meal } from "../../models/Meal";

const PRICE_INPUT = "price";
const TITLE_INPUT = "title";
const QUANTITY_INPUT = "quantity";
const IS_TOTAL_INPUT = "isTotal";

const MINIMUM_PRICE = 1;
const MINIMUM_QUANTITY = 1;

type PriceFor = "SINGLE" | "QUANTITY";

type MealFormSchema = {
  [PRICE_INPUT]: number;
  [TITLE_INPUT]: string;
  [QUANTITY_INPUT]: number;
};

type MealFormProps = {
  addMeal(meal: Omit<Meal, "id">): void;
};

export const MealForm = (props: MealFormProps) => {
  const [isForQuantity, setIsForQuantity] = useState<PriceFor>("SINGLE");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const result = Object.fromEntries(formData.entries());

    const mealFormSchema = validateMealFormSchema(result, isForQuantity);

    props.addMeal({
      name: mealFormSchema[TITLE_INPUT],
      pricePerItem: mealFormSchema[PRICE_INPUT],
      quantity: mealFormSchema[QUANTITY_INPUT],
    });

    form.reset();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: "1 0 auto",
        }}
      >
        <input
          required
          type="number"
          defaultValue={MINIMUM_QUANTITY}
          min={MINIMUM_QUANTITY}
          name={QUANTITY_INPUT}
          placeholder="Enter meal quantity"
        />
        <input
          required
          type="text"
          name={TITLE_INPUT}
          placeholder="Enter meal title"
        />
        <input
          required
          type="number"
          name={PRICE_INPUT}
          min={MINIMUM_PRICE}
          defaultValue={MINIMUM_PRICE}
          placeholder="Enter meal price"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flex: "1 0 auto",
        }}
      >
        <label>
          <input
            checked={isForQuantity === "SINGLE"}
            type="radio"
            name={IS_TOTAL_INPUT}
            onChange={(e) => setIsForQuantity("SINGLE")}
          />
          price for single item
        </label>
        <label>
          <input
            checked={isForQuantity === "QUANTITY"}
            type="radio"
            name={IS_TOTAL_INPUT}
            onChange={(e) => setIsForQuantity("QUANTITY")}
          />
          price for whole quantity
        </label>
      </div>
      <FormButton>Add meal</FormButton>
    </form>
  );
};

function validateMealFormSchema(
  form: Record<string, unknown>,
  priceFor: PriceFor
): MealFormSchema {
  const hasPriceInput = PRICE_INPUT in form;
  const hasTitleInput = TITLE_INPUT in form;
  const hasQuantityInput = QUANTITY_INPUT in form;

  if (!(hasPriceInput && hasTitleInput && hasQuantityInput)) {
    throw new Error("Form schema is inCorrect");
  }

  const passedForm = form as Record<keyof MealFormSchema, string>;

  const resultForm: MealFormSchema = {
    [PRICE_INPUT]: parseInt(passedForm[PRICE_INPUT]),
    [TITLE_INPUT]: passedForm[TITLE_INPUT],
    [QUANTITY_INPUT]: parseInt(passedForm[QUANTITY_INPUT]),
  };

  if (priceFor === "QUANTITY") {
    resultForm[PRICE_INPUT] = Math.ceil(
      resultForm[PRICE_INPUT] / resultForm[QUANTITY_INPUT]
    );
  }

  return resultForm;
}
