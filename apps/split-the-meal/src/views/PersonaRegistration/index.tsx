import { useState } from "react";
import { PersonasList } from "./PersonasList";
import { PersonasForm } from "./PersonasForm";
import { FormButton } from "../../atoms/FormButton";
import { Persona } from "../../models/Personas";
import { uuid } from "../../utils/uuid";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { PhaseBackground, PhaseTitle } from "../../atoms/Phase.styles";
import { PhaseFooter } from "../../atoms/Phase.styles";

export const PersonaRegistration = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [personas, setPersonas] = useState<Array<Persona>>(state.personas);

  function add(params: Omit<Persona, "id">) {
    let isError: boolean = false;

    if (params.name !== "") {
      setPersonas((prev) => {
        if (prev.some((persona) => persona.name === params.name)) {
          isError = true;
          return prev;
        }
        const id = uuid();
        return prev.concat({ id, ...params });
      });
    }

    return isError;
  }

  function remove(id: string) {
    setPersonas((prev) => prev.filter((persona) => persona.id !== id));
  }

  function proceed() {
    dispatch({
      type: "REGISTER_PERSONAS",
      payload: personas,
    });
  }

  return (
    <PhaseBackground>
      <PhaseTitle>Persona registration</PhaseTitle>
      <PersonasForm add={add} />
      <PersonasList personas={personas} remove={remove} />
      <PhaseFooter>
        <FormButton
          type="button"
          disabled={personas.length < 1}
          onClick={() => proceed()}
        >
          Proceed &gt;&gt;
        </FormButton>
      </PhaseFooter>
    </PhaseBackground>
  );
};
