import React, { Component } from "react";
import { connect } from "react-redux";
import autosuggest from "../css/autosuggest.css";
import {
  setLocation,
  onChange,
  setSuggestions
} from "../actions/searchactions";
import Autosuggest from "react-autosuggest";

class Search extends Component {
  async componentDidMount() {
    await this.props.setLocation("FETCH_LOCATION");
  }

  escapeRegexCharacters=(str)=> {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

  getSuggestions = value => {
    //   debugger;
    const escapedValue = this.escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(escapedValue, 'i');

  return this.props.location.filter(location => regex.test(location));
  };

  onChange = (event, { newValue, method }) => {
    debugger;
    this.props.onChange(newValue);
  };
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    debugger;
    this.props.setSuggestions(this.getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    debugger;
    this.props.setSuggestions([]);
  };

  render() {
    debugger;
    return (
      <div className="card">
        <form className="needs-validation" novalidate>
          <div className="container d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <div className="form-group col-xs mr-2">
                <label htmlFor="locationid">Location</label>
                <Autosuggest
                  suggestions={this.props.suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={suggestion => suggestion}
                  renderSuggestion={suggestion => (
                    <div>{suggestion}</div>
                  )}
                  inputProps={{
                    placeholder: "Location",
                    value: this.props.value,
                    type: "search",
                    className: "form-control",
                    onChange: this.onChange
                  }}
                />
              </div>
              <div className="form-group col-xs mr-2">
                <label htmlFor="battleid">Battle Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameid"
                  placeholder="battle"
                  required
                />
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <div className="form-group col-xs mr-2">
                <label htmlFor="yearid">Year</label>
                <input
                  type="number"
                  className="form-control"
                  id="yearid"
                  placeholder="year"
                  required
                />
              </div>
              <div className="form-group col-xs mr-2">
                <label htmlFor="regionid">Region</label>
                <input
                  type="text"
                  className="form-control"
                  id="regionid"
                  placeholder="region"
                  required
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <button className=" btn btn-primary w-25 mt-2 mb-2">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {
  location: [],
  value: "",
  suggestions:[],
};

const mapStateToProps = state => ({
  location: state.battlereducer.location,
  value: state.battlereducer.value,
  suggestions: state.battlereducer.suggestions,
});

export default connect(mapStateToProps, {
  setLocation,
  onChange,
  setSuggestions
})(Search);
