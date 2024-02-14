import './weatherDetails.css';
import PropTypes from 'prop-types'

export default function WeatherDetails(props) {
    if (props.weather) {
        const { location, temperature, description, icon } = props.weather;

        return (
            <div>
                <div>
                    The weather in {location} is {temperature} and {description}
                </div>
                <img id="icon" src={icon} />
            </div>
        );
    }
    else {
        return (<div>
            <div>
                Please enter a valid US zip to see the weather
            </div>
            <div className="error">{props.error}</div>
        </div>);
    }
}

WeatherDetails.propTypes = {
    weather: PropTypes.shape({
        location: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })
}