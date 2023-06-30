import { useState } from "react";
import { PersonasList } from "./PersonasList";
import { PersonasForm } from "./PersonasForm";
import { Button } from "../../atoms/Button";
import { Persona } from "../../models/Personas";
import { uuid } from "../../utils/uuid";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { PhaseBackground } from "../../atoms/PhaseBackground";
import { PhaseFooter } from "../../atoms/PhaseFooter";

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
      <h1>Persona registration</h1>
      <PersonasForm add={add} />
      <PersonasList personas={personas} remove={remove} />
      <PhaseFooter>
        <Button
          type="button"
          disabled={personas.length < 1}
          onClick={() => proceed()}
        >
          Proceed &gt;&gt;
        </Button>
      </PhaseFooter>
    </PhaseBackground>
  );
};
