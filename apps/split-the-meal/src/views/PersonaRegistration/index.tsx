import styled from "@emotion/styled";
import { useState } from "react";
import { PersonasList } from "./PersonasList";
import { PersonasInput } from "./PersonasInput";
import { Button } from "../../atoms/Button";
import { Persona } from "../../models/Personas";
import { uuid } from "../../utils/uuid";
import { useAppDispatch, useAppState } from "../../contexts/appContext";
import { PhaseBackground } from "../../atoms/PhaseBackground";

const PersonaRegistrationFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PersonaRegistration = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [personas, setPersonas] = useState<Array<Persona>>(state.personas);

  function remove(id: string) {
    setPersonas((prev) => prev.filter((persona) => persona.id !== id));
  }

  function add(name: string) {
    const personaValue = name.trim();

    let isError: boolean = false;

    if (personaValue !== "") {
      setPersonas((prev) => {
        if (prev.some((persona) => persona.name === personaValue)) {
          isError = true;
          return prev;
        }
        const id = uuid();
        return prev.concat({ id, name: personaValue });
      });
    }

    return isError;
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
      <PersonasInput add={add} />
      <PersonasList personas={personas} remove={remove} />
      <PersonaRegistrationFooter>
        <Button
          type="button"
          disabled={personas.length < 1}
          onClick={() => proceed()}
        >
          Proceed &gt;&gt;
        </Button>
      </PersonaRegistrationFooter>
    </PhaseBackground>
  );
};
