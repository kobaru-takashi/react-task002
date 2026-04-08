import { configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createHashHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import counterReducer from '../features/counter/counterSlice'
import signupReducer from '../slice/signup-slice'
import loginReducer from '../slice/login-slice'

export const history = createHashHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  signupInfo: signupReducer,
  loginInfo: loginReducer,
})

export const store = configureStore({
  reducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({serializableCheck: false})
      .concat(routerMiddleware(history))
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;