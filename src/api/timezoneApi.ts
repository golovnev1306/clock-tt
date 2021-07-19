import axios from 'axios'
import {TimezoneResponse} from '../types'

export default {
    getAll: () => {
        return axios.get<TimezoneResponse[]>('timezones.json')
    }
}
