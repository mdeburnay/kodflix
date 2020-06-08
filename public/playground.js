import React from "react";

class F1Drivers extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((driver) => (
          <div className="driver" key={driver.name}>
            <div className="name">{driver.name}</div>
            <div className="positions">
              {Object.keys(driver.positions)
                .map((year) => `${year}: ${driver.positions[year]}`)
                .join(", ")}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
