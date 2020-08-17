import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList(props) {
  console.log(props.countries);
  let countries = props.countries;
  return (
    <div>
      {countries.map((eachCountry) => {
        return (
          <div key={eachCountry.cca3}>
            <Link to={`/countries/${eachCountry.cca3}`}>
              {eachCountry.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
