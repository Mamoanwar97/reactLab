import { useState } from "react";
import { COOLORS } from "../../utils/coolors";
import { FormButton } from "../../atoms/FormButton";
import { Persona } from "../../models/Personas";
import { InputWrapper } from "./PersonasForm.styles";

const PERSONAS_NICKNAME_MAX_LIMIT = 30;
const NAME_INPUT = "name";

type PersonaFormSchema = {
  [NAME_INPUT]: string;
};

type PersonasFormProps = {
  add: (name: Omit<Persona, "id">) => boolean;
};

export const PersonasForm = ({ add }: PersonasFormProps) => {
  const [duplicateNameError, setDuplicateNameError] = useState<string>();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const result = Object.fromEntries(formData.entries());

    const personaFormSchema = validatePersonaFormSchema(result);

    const isError = add({
      name: personaFormSchema[NAME_INPUT],
    });

    if (isError) {
      setDuplicateNameError(personaFormSchema[NAME_INPUT]);
    } else {
      form.reset();
      setDuplicateNameError(undefined);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}
    >
      <p
        style={{
          color: COOLORS.fourth,
          fontSize: "12px",
        }}
      >
        Max limit is {PERSONAS_NICKNAME_MAX_LIMIT} characters
      </p>
      <InputWrapper>
        <input
          name={NAME_INPUT}
          type="text"
          placeholder="Please enter a nickname"
          maxLength={PERSONAS_NICKNAME_MAX_LIMIT}
          style={{ flex: "1 0 auto", padding: "0 16px" }}
          required
        />
        <FormButton>register</FormButton>
      </InputWrapper>
      <p
        style={{
          color: COOLORS.secondary,
          fontSize: "12px",
          visibility: duplicateNameError ? "visible" : "hidden",
        }}
      >
        Nickname {duplicateNameError} already exists
      </p>
    </form>
  );
};

function validatePersonaFormSchema(
  form: Record<string, unknown>
): PersonaFormSchema {
  const hasNameInput = NAME_INPUT in form;

  if (!hasNameInput) {
    throw new Error("Form schema is inCorrect");
  }

  const passedForm = form as Record<keyof PersonaFormSchema, string>;

  const resultForm: PersonaFormSchema = {
    [NAME_INPUT]: passedForm[NAME_INPUT].trim(),
  };

  return resultForm;
}
