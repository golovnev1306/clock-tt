import Select from '@material-ui/core/Select'
import {MenuItem} from '@material-ui/core'
import React, {ChangeEvent, FC} from 'react'
import {TimezoneResponse} from '../types'

type OwnProps = {
    selectedTimezone: number
    setSelectedTimezone: (timezone: number) => void
    timezones: TimezoneResponse[]
    date: Date
}

const TimezoneSelect: FC<OwnProps> = ({selectedTimezone, setSelectedTimezone, timezones, date}) => {
    const handleChange = (event: ChangeEvent<{ name?: string, value: any }>): void => {
        setSelectedTimezone(event.target.value)
    }

    return <div className={'clock__timezone-selector'}>
        <Select
            value={selectedTimezone}
            onChange={handleChange}
            autoWidth={true}
            variant={'outlined'}
        >
            {timezones.map(i => <MenuItem key={i.differenceTimeUTC} value={i.differenceTimeUTC}>{i.city}</MenuItem>)}
        </Select>
    </div>
}

export default TimezoneSelect