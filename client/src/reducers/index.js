import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import music from './music';

const persistConfig = {
  key: 'root',
  // localStorage에 저장
  storage,
  whitelist: ['music'],
};

const rootReducer = combineReducers({
  music,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
