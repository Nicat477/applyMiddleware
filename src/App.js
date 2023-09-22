import React, { useEffect, useState } from "react";
import "./styles.css";

import { connect } from "react-redux";
import { getCountries } from "./actions";
const App = (props) => {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.eu/rest/v2/all")
  //     .then(response => setCountries(response.data))
  //     .catch(error => console.log({ error }));
  // }, []);
  useEffect(() => {
    props.getCountries;
  }, []);
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>Redux Thunk Middleware</h2>
      {props.isloading ? (
        <p>
          <img
            style={{ width: 30, height: 30 }}
            src="https://media2.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif"
            alt="loading"
          />
        </p>
      ) : (
        props.countries.map((country) => {
          return (
            <div key={country.name}>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    isloading: state.isloading
  };
};
export default connect(mapStateToProps, { getCountries })(App);
