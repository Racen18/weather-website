const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1a8440cd88bf156541bf69371afc5c36&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        }
        else if(body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            let data = body.current
            callback(undefined, data.weather_descriptions[0] + ". It is currently " + data.temperature + " degress out. It feels like " + data.feelslike + " degress out. The humidity is " + data.humidity + "% period.")
        }
    })
}

module.exports = forecast
