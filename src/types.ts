import store from './redux/store'
import {ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux'

export type AppState = ReturnType<typeof store.getState>

type ReturnACType<T> = T extends { [key: string]: infer U } ? U : never
export type ReturnActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<ReturnACType<T>>

export type TimezoneResponse = {
    city: string
    differenceTimeUTC: number
}

export type TDispatch = ThunkDispatch<AppState, void, AnyAction>