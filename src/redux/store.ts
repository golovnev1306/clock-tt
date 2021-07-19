import {applyMiddleware, combineReducers, createStore} from 'redux'
import timezoneReducer from './timeReducer'
import thunk from 'redux-thunk'
import appReducer from './appReducer'

export const rootReducer = combineReducers({
    timezone: timezoneReducer,
    app: appReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store