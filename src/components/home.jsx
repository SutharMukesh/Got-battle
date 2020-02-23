/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchbar';
import BattleCards from './battletable';

/**
 * Home Component
 *
 * @returns {object} component which has child components
 */
class Home extends Component {
  render() {
    return (
      <div className="container d-flex flex-column">
        <div className="headtitle align-self-center my-3">
          <h4>BATTLES OF GOT</h4>
        </div>
        <SearchBar />
        {this.props.battles.length > 0 ? (
          <BattleCards battles={this.props.battles} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  battles: state.battlecards.battles,
});

export default connect(mapStateToProps)(Home);
