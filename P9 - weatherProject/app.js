const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000;


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
	const query = req.body.cityName;
	const apiKey = '0db88be23ce5b5b4eb02e77981f339b2';
	const unit = 'metric';
	const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=' + unit + '&appid=' + apiKey;

	https.get(url, function(response) {
		console.log(response.statusCode);

		response.on('data', function(data) {
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const weatherDescription = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png";

			// http://openweathermap.org/img/wn/10d@2x.png
			res.write('<h1>The weather is currently ' + weatherDescription + '</h1>');
			res.write('<h3>The temperature in ' + query + ' is ' + temp + ' degrees Celsius.</h3>');
			res.write('<img src=' + imageURL + '>');
			res.send();
		})
	})
})

app.listen(port, function() {
	console.log(`Server is working on port ${port}`);
})