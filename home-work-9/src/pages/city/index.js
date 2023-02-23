import {useParams} from "react-router-dom";
import {useMemo} from "react";
import './styles.css'
import {WeatherItem} from "../../components/WeatherItem";


export const City = () => {
	const weather = useMemo(() => JSON.parse(localStorage.getItem('weather')), [])
	const params = useParams()
	const weatherCity = weather[params.name]

	const {weather: currentWeather, dayOfWeek, temperature, wind} = weatherCity.weatherNow
	console.log(weatherCity.nextDate)
	const restDate = weatherCity.nextDate.map((weatherDay) => {
		return <WeatherItem weather={weatherDay} />
	})

	return (
		<div className={'weather'}>
			<h1 className={'title'}>{weatherCity.label}</h1>
			<hr />
			<h3>Погода сегодня {dayOfWeek}: </h3>
			<p>Погода: {currentWeather}</p>
			<p>Температура: {temperature}°C</p>
			<p>Ветер: {wind}</p>

			<h3>Погода на 3 дня:</h3>

			<div className={'rest-date'}>
				{restDate}
			</div>
		</div>
	)
}
