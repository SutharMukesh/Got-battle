/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';

export default function BattleCards(props) {
  return (
    <div className="card mt-3 shadow-sm table-responsive">
      <table className="table table-sm table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            {Object.keys(props.battles[0]).map(colname => (
              <th scope="col" className="table-head">
                {colname}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.battles.map(battle => (
            <tr>
              {Object.keys(battle).map(key => (
                <td style={{ width: '1px', 'white-space': 'nowrap' }}>
                  {battle[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
