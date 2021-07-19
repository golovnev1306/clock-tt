import {AppState} from './types'

export const getTimezones = (state: AppState) => state.timezone.timezones
export const getIsLoading = (state: AppState) => state.app.isLoading
