import React from 'react';

/**
 * Компонент «Погода»: формирует основной контент виджета погоды.
 */
export default function Weather() {

  const data = {
    image: '',
    temperature: {
      current: '+17',
      night: '+13',
      morning: '+15',
      afternoon: '+18',
      evening: '+12',
    },
  }

  return (
    <div className="weather">
      <img className='weather__state__icon' src={data.image} alt="rain" />
      <span className='weather__currtemperature'>{data.temperature.current}</span>
      <div className='weather__ondaytemperature__wrapper'>
        <span className='weather__ondaytemperature'>{`Утром ${data.temperature.morning},`}</span>
        <span className='weather__ondaytemperature'>{`днем ${data.temperature.afternoon}`}</span>
      </div>
    </div>
  );
}
