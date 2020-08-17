import React, { Component } from 'react';
import countryData from '../countries.json';
import { Link } from 'react-router-dom';

class SingleCountryView extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadCountry();
    }
  }

  loadCountry() {
    const id = this.props.match.params.id;
    const country = countryData.find((country) => country.cca3 === id);
    this.setState({
      country,
    });
  }

  render() {
    return (
      <div class="countryDetails">
        {this.state.country && (
          <div className="col-7">
            <h1>{this.state.country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{this.state.country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {(this.state.country.borders.length > 0 &&
                        this.state.country.borders.map((borderCountry) => {
                          let country = countryData.find(
                            (country) => country.cca3 === borderCountry
                          );

                          return (
                            <li>
                              <Link
                                key={borderCountry}
                                to={`/countries/${borderCountry}`}
                              >
                                {country.name.common}
                              </Link>
                            </li>
                          );
                        })) ||
                        'This country has no borders. Lonely planet!'}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default SingleCountryView;
