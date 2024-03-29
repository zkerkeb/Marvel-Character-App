import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from '../reducers' // the value from combineReducers

const middleware = []
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}
middleware.push(thunk)

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
}

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)
