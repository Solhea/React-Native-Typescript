import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user"],
};

const rootReducer = combineReducers({
    user: userReducer,
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof persistor.getState>;
export type AppDispatch = typeof persistor.dispatch;