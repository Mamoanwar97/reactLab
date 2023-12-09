import { useState } from "react";
import { useAppState } from "../../contexts/appContext";
import { Persona } from "../../models/Personas";
import { Share } from "../../models/Share";

export const SplitOnForm = () => {
  const { personas } = useAppState();

  const [participants, setParticipants] = useState<Array<Share>>([]);

  const quantity = 10;

  const displayedPersonas = getDisplayedPersonasNames(personas, participants);

  return (
    <div>
      <h2>{10} items are remaining</h2>
      <form>
        Split
        <input type="number" min={0} max={quantity} />
        on
        <select name="mode" id="mode">
          <option value="ALL">all</option>
          <option value="SELECTED_ONLY">the following</option>
          <option value="ALL_EXCEPT">all except the following</option>
        </select>
        <input list="participants" name="participant" id="participant" />
        <datalist id="participants">
          {displayedPersonas.map((persona) => (
            <option value={persona.name}>{persona.name}</option>
          ))}
        </datalist>
      </form>
      <div>
        <span>
          2 items are split equally on 2 people <span>delete</span>
        </span>
      </div>
    </div>
  );
};

function getDisplayedPersonasNames(
  personas: Array<Persona>,
  participants: Array<Share>
) {
  const participantsNames = participants.reduce(
    (acc, p) => [...acc, ...p.personasNames],
    [] as Array<string>
  );

  return personas.filter(
    (persona) => !participantsNames.includes(persona.name)
  );
}
