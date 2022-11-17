import React from 'react'
import moment from 'moment'
import Image from 'next/dist/client/image'

export default function WeeklyWeather({ weeklyWeather, timezone }) {
  return (
    <div className='hourly'>
        <div className='hourly__inner'>
            { weeklyWeather.length > 0 && weeklyWeather.map((weather, index) => (
                <div className='hourly__box-wrapper' key={weather.dt}>
                    <div className='hourly__box'>
                        <span className={`hourly__time ${index==0 ? 'hourly__time-now':""}`}>
                                
                                {index == 0 ? "TODAY" : moment.unix(weather.dt).tz(timezone).format("dddd")}
                        </span>
                        <Image 
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                            alt={weather.weather[0].description} 
                            width="100"
                            height="100"/>
                            <p>{weather.temp.max.toFixed(0)}&deg;C | {weather.temp.min.toFixed(0)}&deg;C</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
