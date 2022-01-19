import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import pReducer from "./components/List/reducer";

export const store = createStore(pReducer);
export const persistor = persistStore(store);
