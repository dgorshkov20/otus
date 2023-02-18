export const cities = [
	{
		label: 'Москва',
		name: 'moscow'
	},
	{
		label: 'Анапа',
		name: 'anapa'
	},
	{
		label: 'Санкт-Петербург',
		name: 'spb'
	},
]

export const weather = {
	moscow: {
		label: 'Москва',
		weatherNow: {
			weather: 'Снег',
			temperature: '-12',
			wind: '10 м/с',
			dayOfWeek: 'ПН',
		},
		nextDate: [
			{
				weather: 'Снег',
				temperature: '-16',
				wind: '14 м/с',
				dayOfWeek: 'ВТ',
			},
			{
				weather: 'Дождь',
				temperature: '1',
				wind: '3 м/с',
				dayOfWeek: 'СР',
			},
			{
				weather: 'Ясно',
				temperature: '-5',
				wind: '6 м/с',
				dayOfWeek: 'ЧТ',
			}
		]
	},

	anapa: {
		label: 'Анапа',
		weatherNow: {
			weather: 'Облачно',
			temperature: '8',
			wind: '14 м/с',
			dayOfWeek: 'ПН',
		},
		nextDate: [
			{
				weather: 'Дождь',
				temperature: '9',
				wind: '8 м/с',
				dayOfWeek: 'ВТ',
			},
			{
				weather: 'Дождь',
				temperature: '10',
				wind: '15 м/с',
				dayOfWeek: 'СР',
			},
			{
				weather: 'Переменная облачность',
				temperature: '14',
				wind: '6 м/с',
				dayOfWeek: 'ЧТ',
			}
		]
	},

	spb: {
		label: 'Санкт-Петербург',
		weatherNow: {
			weather: 'Облачно',
			temperature: '-5',
			wind: '4 м/с',
			dayOfWeek: 'ПН',
		},
		nextDate: [
			{
				weather: 'Снег',
				temperature: '-3',
				wind: '5 м/с',
				dayOfWeek: 'ВТ',
			},
			{
				weather: 'Снег',
				temperature: '-11',
				wind: '4 м/с',
				dayOfWeek: 'СР',
			},
			{
				weather: 'Снег',
				temperature: '-4',
				wind: '4 м/с',
				dayOfWeek: 'ЧТ',
			}
		]
	}
}
