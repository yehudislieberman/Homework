import { Component } from 'react';
import './App.css';
import './weatherDetails.css';
import WeatherDetails from './weatherDetails';

export default class App extends Component {
  state = {
    zip: '',
  };

  async getWeather(zip) {
    const appID = '0b83367fc1add90ce5a2f18fdda245b3';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${appID}&units=imperial`);
      const weatherData = await response.json();

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} - ${weatherData.message}`);
      }

      this.setState({
        weather: {
          location: weatherData.name,
          temperature: weatherData.main.temp,
          description: weatherData.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
        }
      });
    } catch (e) {
      console.error(e);

      this.setState({
        error: e.message,
      });
    }
  }

  zipChanged = async (e) => {
    const zip = e.target.value;
    this.setState({ zip });

    if (zip.length === 5) {
      await this.getWeather(zip);
    }
  };

  render() {
    const { zip, weather, error } = this.state;

    return (
      <div>
        <div>
          <div>
            <input className="form-control" id="zip" placeholder="Please enter a valid US zip code" value={zip} onChange={this.zipChanged} />
          </div>
        </div>
        <WeatherDetails weather={weather} error={error} />
      </div>
    );
  }
}





