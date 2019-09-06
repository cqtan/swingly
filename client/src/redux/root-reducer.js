import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeModeReducer from './theme-mode/theme-mode.reducer';
import userReducer from './user/user.reducer';
import snackbarReducer from './snackbar/snackbar.reducer';
import eventsReducer from './events/events.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['themeMode']
};

const rootReducer = combineReducers({
  themeMode: themeModeReducer,
  snackbar: snackbarReducer,
  user: userReducer,
  events: eventsReducer
});

export default persistReducer(persistConfig, rootReducer);