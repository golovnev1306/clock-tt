import React, {FC, useEffect, useState} from 'react'
import ClockCustomized from './components/ClockCustomized'
import {connect} from 'react-redux'
import {AppState, TDispatch} from './types'
import {setTimezonesThunk} from './redux/timeReducer'
import {getIsLoading} from './selectors'
import {CircularProgress} from '@material-ui/core'
import './App.scss'

const App: FC<MapDispatchProps & MapStateProps> = ({setTimezones, isLoading}) => {

    const [commonDate, setCommonDate] = useState<Date>(new Date())

    useEffect(() => {
        setTimezones()

        const interval = setInterval(() => {
            setCommonDate(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="App">
            {isLoading ? (
                <div className={'loading'}>
                    <CircularProgress/>
                    <div>Идет подгрузка временных зон, пожалуйста, подождите</div>
                </div>
            ) : (
                <div className={'clock-wrap'}>
                    <ClockCustomized commonDate={commonDate}/>
                    <ClockCustomized commonDate={commonDate}/>
                </div>)}
        </div>
    )
}

type MapStateProps = {
    isLoading: boolean
}

const mapStateProps = (state: AppState): MapStateProps => {
    return {
        isLoading: getIsLoading(state)
    }
}

type MapDispatchProps = {
    setTimezones: () => void
}

const mapDispatchProps = (dispatch: TDispatch): MapDispatchProps => {
    return {
        setTimezones: () => dispatch(setTimezonesThunk())
    }
}

export default connect<MapStateProps, MapDispatchProps, {}, AppState>(mapStateProps, mapDispatchProps)(App)
