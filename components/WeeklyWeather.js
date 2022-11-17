import React from 'react'
import moment from 'moment'
import Image from 'next/dist/client/image'

export default function WeeklyWeather({ weeklyWeather, timezone }) {
  return (
    <div className='weekly'>
        <h2 className='weekly__title'>7 Day Forcast</h2>
        <div className='weekly__inner'>
            { weeklyWeather.length > 0 && weeklyWeather.map((weather, index) => {
                if (index === 0) {
                    return;
                }

                return (
                    <div className='weekly__box-wrapper' key={weather.dt}>
                    <div className='weekly__box'>
                        <span className='weekly__time'>
                                {moment.unix(weather.dt).tz(timezone).format("dddd").toUpperCase()}
                        </span>
                        <Image 
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                            alt={weather.weather[0].description} 
                            width="100"
                            height="100"/>
                            <div className='weekly__temp'>
                                <p>{weather.temp.max.toFixed(0)}&deg;C</p>
                                <p>|</p>
                                <p>{weather.temp.min.toFixed(0)}&deg;C</p>
                            </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}
