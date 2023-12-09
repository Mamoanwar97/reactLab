import { useState } from "react";
import { PersonasList } from "./PersonasList";
import { PersonasForm } from "./PersonasForm";
import { FormButton } from "../../atoms/FormButton";
import { Persona } from "../../models/Personas";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { PhaseBackground, PhaseTitle } from "../../atoms/Phase.styles";
import { PhaseFooter } from "../../atoms/Phase.styles";

//TODO: Generate random names
export const PersonasRegistration = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [personas, setPersonas] = useState<Array<Persona>>(state.personas);

  function add(params: Persona) {
    let isError: boolean = false;

    if (params.name !== "") {
      setPersonas((prev) => {
        if (prev.some((persona) => persona.name === params.name)) {
          isError = true;
          return prev;
        }
        return prev.concat(params);
      });
    }

    return isError;
  }

  function remove(name: string) {
    setPersonas((prev) => prev.filter((persona) => persona.name !== name));
  }

  function proceed() {
    dispatch({
      type: "REGISTER_PERSONAS",
      payload: personas,
    });
  }

  return (
    <PhaseBackground>
      <PhaseTitle>Personas registration</PhaseTitle>
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
