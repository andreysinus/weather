import React from 'react'

export default function WeatherBlock(props) {

  return (
    <div className='weatherBlock ml52'>
              <a className='block1Text blockFText'>{props.date1}</a>
              <a className='blockText'>{props.date2}</a>
              <a className='blockText blockCText'>{props.cels}°C</a>
              <a className='blockText'>{props.weat}</a>
    </div>
  )
}
