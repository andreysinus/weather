import React from 'react'
import WeatherBlock from './Now/weatherBlock';

export default function Now() {
  var cityChe='Cherepovets';
  var celsium=17;
  var prec=44;
  var hum=66;
  var wind=5;
  const current = new Date();
  const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;
  return (
    
    <div className='screen-container'>
      <div>
        <div>
          <a className='Head-text'>NOW </a>
          <a className='dateText'>{date}</a>
        </div>
          <div>
            <a className='Main-text'>in </a>
            <a className='Addon-text bolded'>{cityChe}</a>
            <a className='Addon-text'>:</a>
            
          </div>

        <div>
          <a className='Head-text up'>+{celsium}</a>
          <a className='Addon-text'>°C</a>
        </div>

          <div className="screen-container2">
            <a className='underCels-text'>Precipitation: {prec} %</a>
            <a className='underCels-text'>Humidity: {hum} %</a>
            <a className='underCels-text'>Wind: {wind} m/s</a>
          </div>
          <div className='cs'>
        <WeatherBlock date1="Today" date2="21 June" cels="+18" weat="Cloudy"/>
        <WeatherBlock date1="Tomorrow" date2="22 June" cels="+24" weat="Sunny"/>
        <WeatherBlock date1="Thursday" date2="23 June" cels="+26" weat="Sunny"/>
        <WeatherBlock date1="Friday" date2="24 June" cels="+20" weat="Rainy"/>
        <WeatherBlock date1="Saturday" date2="25 June" cels="+21" weat="Cloudy"/>
        <WeatherBlock date1="Sunday" date2="26 June" cels="+17" weat="Rainy"/>
        <WeatherBlock date1="Monday" date2="27 June" cels="+24" weat="Sunny"/>
      </div>
      </div>
    </div>
    
  )
}
