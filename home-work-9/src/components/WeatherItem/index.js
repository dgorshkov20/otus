import './styles.css'

export const WeatherItem = ({weather}) => {
	const {weather: currentWeather, dayOfWeek, temperature, wind} = weather

	return (
		<div className={'weather-wrapper'}>
			<h3>Погода на {dayOfWeek}: </h3>
			<p>Погода: {currentWeather}</p>
			<p>Температура: {temperature}°C</p>
			<p>Ветер: {wind}</p>
		</div>
	)
}
