import { Action, configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import ColorDetailsReducer from "./ColorDetails/ColorDetails.slice";
import ColorsDataReducer from "./ColorsData/ColorsData.slice";

const store = configureStore({
  reducer: {
    colorsData: ColorsDataReducer,
    colorDetails: ColorDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createLogger({
        collapsed: true,
        duration: true,
        timestamp: true,
      })
    ),
});

const GlobalReduxStore = (props: any) => (
  <Provider store={store}>{props.children}</Provider>
);

//TYPES
export type GlobalState = ReturnType<typeof store["getState"]>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReduxDispatch = ThunkDispatch<GlobalState, any, Action>;

export type ThunkResult<R> = ThunkAction<R, GlobalState, undefined, Action>;
// R -> Return Value
// GlobalState -> STate type for getSTate
// undefined -> "Extra argument": the thunk middleware can be customized to pass in an extra value
// AnyAction -> Action types accepted by dispatch

export default GlobalReduxStore;
