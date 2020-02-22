/* eslint-disable linebreak-style */
import React from 'react';
import SearchBar from './searchbar';
import BattleCards from './battlecards';

/**
 * Home Component
 *
 * @returns {object} component which has child components
 */
export default function Home() {
  return (
    <div className="container d-flex flex-column">
      <div className="headtitle align-self-center my-3">
        <h4>BATTLES OF GOT</h4>
      </div>
      <SearchBar />
      <BattleCards />
    </div>
  );
}
