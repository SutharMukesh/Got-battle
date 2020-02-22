import React, { Component } from "react";
import { connect } from "react-redux";

class BattleCards extends Component {
  render() {
    debugger;
    if (this.props.battles.length > 0) {
      return (
        <div className="card mt-3 shadow-sm table-responsive">
          <table className="table table-sm table-striped table-hover ">
            <thead className="thead-dark">
              <tr>
                {Object.keys(this.props.battles[0]).map(colname => (
                  <th scope="col">{colname}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.props.battles.map(battle => (
                <tr>
                  {Object.keys(battle).map(key => (
                    <td style={{ width: "1px", "white-space": "nowrap" }}>
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
    return <></>;
  }
}

const mapStateToProps = state => ({
  battles: state.battlecards.battles
});

export default connect(mapStateToProps)(BattleCards);
