import { createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers";

// 永続化の設定
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store