import React, {FC} from 'react'

type OwnProps = {
    date: Date
}

const Time: FC<OwnProps> = ({date}) => {
    return (
        <div className={'clock__time'}>
            {`${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`}
        </div>
    )
}

export default Time