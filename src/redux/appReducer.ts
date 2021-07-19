import {ReturnActionsType} from '../types'

const initialState = {
    isLoading: true
}

const appReducer = (state = initialState, action: AppActions): typeof initialState => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default: return state
    }
}

const actions = {
    setIsLoading: (isLoading: boolean) => ({type: 'SET_IS_LOADING', isLoading} as const),
}

export type AppActions = ReturnActionsType<typeof actions>

export const {setIsLoading} = actions

export default appReducer