import { Button } from "../../atoms/Button";
import { Meal } from "../../models/Meal";

const PRICE_INPUT = "price";
const TITLE_INPUT = "title";
const QUANTITY_INPUT = "quantity";
const IS_TOTAL_INPUT = "isTotal";

type MealFormSchema = {
  [PRICE_INPUT]: number;
  [TITLE_INPUT]: string;
  [QUANTITY_INPUT]: number;
  [IS_TOTAL_INPUT]: boolean;
};

type MealFormProps = {
  addMeal(meal: Omit<Meal, "id">): void;
};

export const MealForm = (props: MealFormProps) => {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const result = Object.fromEntries(formData.entries());

    const mealFormSchema = validateMealFormSchema(result);

    props.addMeal({
      name: mealFormSchema[TITLE_INPUT],
      pricePerItem: mealFormSchema[PRICE_INPUT],
      quantity: mealFormSchema[QUANTITY_INPUT],
    });

    form.reset();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        required
        type="number"
        defaultValue={1}
        min={1}
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
        min={0}
        defaultValue={0}
        placeholder="Enter meal price"
      />
      <input type="checkbox" name={IS_TOTAL_INPUT} />
      <Button>Add meal</Button>
    </form>
  );
};

function validateMealFormSchema(form: Record<string, unknown>): MealFormSchema {
  const hasPriceInput = PRICE_INPUT in form;
  const hasTitleInput = TITLE_INPUT in form;
  const hasQuantityInput = QUANTITY_INPUT in form;
  const hasIsTotal =
    IS_TOTAL_INPUT in form === false || form[IS_TOTAL_INPUT] === "on";

  if (!(hasPriceInput && hasTitleInput && hasQuantityInput && hasIsTotal)) {
    throw new Error("Form schema is inCorrect");
  }

  const passedForm = form as Record<keyof MealFormSchema, string>;

  const resultForm: MealFormSchema = {
    [PRICE_INPUT]: parseInt(passedForm[PRICE_INPUT]),
    [TITLE_INPUT]: passedForm[TITLE_INPUT],
    [QUANTITY_INPUT]: parseInt(passedForm[QUANTITY_INPUT]),
    [IS_TOTAL_INPUT]: passedForm[IS_TOTAL_INPUT] === "on",
  };

  if (resultForm[IS_TOTAL_INPUT]) {
    resultForm[PRICE_INPUT] = Math.ceil(
      resultForm[PRICE_INPUT] / resultForm[QUANTITY_INPUT]
    );
  }

  return resultForm;
}
