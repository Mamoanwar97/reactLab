import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { AppState } from "../reducers/app.state";
import { appReducer } from "../reducers/app.reducer";
import { AppActions } from "../reducers/app.actions";
import { DEFAULT_APP_STATE } from "../reducers/app.default";

const AppStateContext = createContext<AppState | null>(null);

const AppDispatchContext = createContext<React.Dispatch<AppActions> | null>(
  null
);

export const AppProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appReducer, DEFAULT_APP_STATE);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {props.children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export function useAppState() {
  const appState = useContext(AppStateContext);

  if (appState === null) {
    throw new Error("Error can't find app state context");
  }

  return appState;
}

export function useAppDispatch() {
  const appDispatch = useContext(AppDispatchContext);

  if (appDispatch === null) {
    throw new Error("Error can't find app dispatch context");
  }

  return appDispatch;
}
