import './App.css'
import { Component } from 'react';

export default class WeatherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const zip = '11230';
    this.getWeatherData(zip);
  }

  getWeatherData = async (zip) => {
    const appID = `0b83367fc1add90ce5a2f18fdda245b3`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${appID}&units=imperial`;
    try {

      const response = await fetch(apiUrl);
      const data = await response.json();

      this.setState({
        weatherData: data,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  render() {
    const { weatherData } = this.state;

    return (
      <div>
        {weatherData ? (
          <>
            <h1>{weatherData.name}</h1>
            <p>The temperature here is: {weatherData.main.temp} and it is described as - {weatherData.weather[0].description}</p>
          </>
        ) : (
          <p>Please wait, loading weather data...</p>
        )}
      </div>
    );
  }
}