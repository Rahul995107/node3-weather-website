const request= require('request')
const forecast = (latitude,longitude,callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=a73b17800d7ebfea3e4d0d2b77d4c7e2&query=' + latitude +',' + longitude + '&units=f'
    request({url,json: true},(error,{body} )=>{
        if (error){
            callback('Unable to connect to weather service!',undefined)
        }else if (body.error){
            callback('Unable to find location', undefined)    
        }else{
            callback(undefined ,' It is currently ' +  body.current.temperature + ' degress out.It feels like ' + body.current.feelslike + ' degress out')
        }
    })

    
}

module.exports = forecast
// console.log(' It is currently ' +  response.body.current.temperature + 'degress out.It feels like' + response.body.current.feelslike + 'degress out')