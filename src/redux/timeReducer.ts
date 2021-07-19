import {ReturnActionsType, TDispatch, TimezoneResponse} from '../types'
import timezoneApi from '../api/timezoneApi'
import {setIsLoading} from './appReducer'

const initialState = {
    timezones: [] as TimezoneResponse[]
}

const timezoneReducer = (state = initialState, action: TimeActions): typeof initialState => {
    switch (action.type) {
        case 'SET_TIMEZONES':
            return {
                ...state,
                timezones: [...action.timezones]
            }
        default: return state
    }
}

const actions = {
    setTimezones: (timezones: TimezoneResponse[]) => ({type: 'SET_TIMEZONES', timezones} as const),
}

export const setTimezonesThunk = () => {
    return async (dispatch: TDispatch) => {
        try {
            dispatch(setIsLoading(true))
            const result = await timezoneApi.getAll()
            if (result.status === 200) {
                const timezones = result.data
                dispatch(actions.setTimezones(timezones))
            }
            dispatch(setIsLoading(false))

        } catch (er) {
            console.warn(er)
            dispatch(setIsLoading(false))
        }
    }
}

export type TimeActions = ReturnActionsType<typeof actions>

export default timezoneReducer