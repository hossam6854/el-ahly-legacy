// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import squadReducer from "./slices/squadSlice";
import quizReducer from "./slices/quizSlice";
import { combineReducers } from "@reduxjs/toolkit";

// تكوين Redux Persist
const persistConfig = {
  key: "alahlawy", // مفتاح التخزين في localStorage
  version: 1,  // إصدار المخزن، يستخدم لتحديد متى يجب مسح التخزين
  storage,     // تحديد نوع التخزين (localStorage هنا)
};

const rootReducer = combineReducers({
  quiz: quizReducer,
  squad: squadReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// إنشاء مخزن Redux
export const store = configureStore({
  reducer: persistedReducer, // استخدام persistedReducer مباشرة كمفتاح reducer
  // إضافة middleware لتجنب مشاكل التسلسل مع Redux Persist actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // كائن Persistor لبدء عملية استعادة الحالة
