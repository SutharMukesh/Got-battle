import React, { Component } from "react";
import { connect } from "react-redux";
import autosuggest from "../css/autosuggest.css";
import { setBackendData, onChange, setSuggestions } from "../actions/searchbar";
import { setBattlesData } from "../actions/battlecards";
import Autosuggest from "react-autosuggest";

class SearchBar extends Component {
  async componentDidMount() {
    this.props.setBackendData("locationid");
    this.props.setBackendData("battlenameid");
    this.props.setBackendData("regionid");
  }

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  getSuggestions = (value, id) => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === "") return [];

    const regex = new RegExp(escapedValue, "i");
    this.props.setSuggestions(
      this.props[id].backenddata.filter(location => regex.test(location)),
      id
    );
  };

  onChange = (event, { newValue, method }) => {
    this.props.onChange(newValue, event.target.id);
  };

  onSubmitBattleData = event => {
    event.preventDefault();
    debugger;
    const querydata = {
      location: event.target.locationid.value,
      region: event.target.regionid.value,
      year: event.target.yearid.value,
      name: event.target.battlenameid.value
    };
    const queryparams = Object.keys(querydata).map(key => {
      if (querydata[key])
        return `${encodeURIComponent(key)}=${encodeURIComponent(
          querydata[key]
        )}`;
    }).filter(item=>item).join("&");
    this.props.setBattlesData(queryparams);
  };

  render() {
    return (
      <div className="card shadow-sm ">
        <form
          className="needs-validation"
          onSubmit={this.onSubmitBattleData}
          // novalidate
        >
          <div className="container mt-4 d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-row flex-wrap justify-content-center">
              <div className="form-group col-xs mr-2">
                <label htmlFor="locationid">Location</label>
                <Autosuggest
                  suggestions={this.props.locationid.suggestion}
                  onSuggestionsFetchRequested={({ event, value }) => {
                    this.getSuggestions(value, "locationid");
                  }}
                  onSuggestionsClearRequested={() => {
                    this.props.setSuggestions([], "locationid");
                  }}
                  getSuggestionValue={suggestion => suggestion}
                  renderSuggestion={suggestion => (
                    <div id="locationid" className="p-2">
                      {suggestion}
                    </div>
                  )}
                  inputProps={{
                    placeholder: "Location",
                    id: "locationid",
                    value: this.props.locationid.value,
                    className: "form-control",
                    onChange: this.onChange
                  }}
                />
              </div>
              <div className="form-group col-xs mr-2">
                <label htmlFor="battleid">Battle Name</label>
                <Autosuggest
                  suggestions={this.props.battlenameid.suggestion}
                  onSuggestionsFetchRequested={({ event, value }) => {
                    this.getSuggestions(value, "battlenameid");
                  }}
                  onSuggestionsClearRequested={() => {
                    this.props.setSuggestions([], "battlenameid");
                  }}
                  getSuggestionValue={suggestion => suggestion}
                  renderSuggestion={suggestion => (
                    <div id="battlenameid" className="p-2">
                      {suggestion}
                    </div>
                  )}
                  inputProps={{
                    placeholder: "Location",
                    id: "battlenameid",
                    value: this.props.battlenameid.value,
                    className: "form-control",
                    onChange: this.onChange
                  }}
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
                />
              </div>
              <div className="form-group col-xs mr-2">
                <label htmlFor="regionid">Region</label>
                <Autosuggest
                  suggestions={this.props.regionid.suggestion}
                  onSuggestionsFetchRequested={({ event, value }) => {
                    this.getSuggestions(value, "regionid");
                  }}
                  onSuggestionsClearRequested={() => {
                    this.props.setSuggestions([], "regionid");
                  }}
                  getSuggestionValue={suggestion => suggestion}
                  renderSuggestion={suggestion => (
                    <div id="regionid" className="p-2">
                      {suggestion}
                    </div>
                  )}
                  inputProps={{
                    placeholder: "Location",
                    id: "regionid",
                    value: this.props.regionid.value,
                    className: "form-control",
                    onChange: this.onChange
                  }}
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

const mapStateToProps = state => ({
  locationid: state.searchbar.locationid,
  battlenameid: state.searchbar.battlenameid,
  regionid: state.searchbar.regionid
});

export default connect(mapStateToProps, {
  setBackendData,
  onChange,
  setSuggestions,
  setBattlesData
})(SearchBar);