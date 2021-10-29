const request = require('request')

const forecast = (latitude, longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=a40bdf3bead3f87a5237c9d3e13cc1e9&query=' + latitude + ',' + longitude + '&units=f'

        request({ url: url, json: true }, (error, response) => {
                if (error) {
                        callback('Unable to connect to weather service!', undefined)
                } else if (response.body.error) {
                        callback('Unable to find location try another searchs!', undefined)
                } else {
                        callback(undefined, response.body.current.weather_descriptions[0] + '. It is current ' + response.body.current.temperature + ' Today humidity ' + response.body.current.humidity)
                }
        })
}


// forecast(30.087160, 78.268112, (error,data) => {
//     console.log('Error:', error)
//     console.log('Data:', data)
// })

module.exports = forecast


// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast