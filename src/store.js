import { createStore, applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import reduxStore from "./components/List/reducer/reducerTodo";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // Xem thêm tại mục "Quá trình merge".
};
const pReducer = persistReducer(persistConfig, reduxStore);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
