import React, {FC, Fragment, useEffect, useState} from 'react'
import Clock from 'react-clock'
import {AppState, TimezoneResponse} from '../types'
import {getTimezones} from '../selectors'
import {connect} from 'react-redux'
import Time from './Time'
import TimezoneSelect from './TimezoneSelect'

type OwnProps = {
    commonDate: Date
}

const ClockCustomized: FC<MapStateProps & OwnProps> = ({timezones, commonDate}) => {

    const [selectedTimezone, setSelectedTimezone] = useState<number>(timezones[0].differenceTimeUTC)
    const [localeDate, setLocaleDate] = useState<Date>(new Date(commonDate.getTime()))

    useEffect(() => {
        const newDate = new Date(commonDate.getTime())
        newDate.setHours(newDate.getHours() + selectedTimezone + newDate.getTimezoneOffset() / 60)
        setLocaleDate(newDate)
    }, [commonDate])


    return (
        <Fragment>
            {localeDate && (
                <div className={'clock'}>
                    <Clock className={'clock__img'} value={localeDate} size={200} hourHandLength={35}/>
                    <Time date={localeDate}/>
                    <TimezoneSelect
                        date={localeDate}
                        selectedTimezone={selectedTimezone}
                        setSelectedTimezone={setSelectedTimezone}
                        timezones={timezones}
                    />
                </div>
            )}
        </Fragment>

    )
}

type MapStateProps = {
    timezones: TimezoneResponse[]
}

const mapStateProps = (state: AppState): MapStateProps => {
    return {
        timezones: getTimezones(state)
    }
}

export default connect<MapStateProps, {}, {}, AppState>(mapStateProps)(ClockCustomized)