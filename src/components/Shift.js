import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Shift extends Component {
  render() {
    const { shiftValues, handleShiftChange, currentShiftValue } = this.props;
    const values = shiftValues.map(item =>
      item !== "" ? (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ) : (
        <MenuItem key={item} value={item} disabled>
          Enter shift amount
        </MenuItem>
      )
    );
    return (
      <div className="shift">
        <center>
          <Select
            onChange={handleShiftChange}
            value={currentShiftValue}
            autoWidth={true}
            displayEmpty
          >
            {values}
          </Select>
        </center>
      </div>
    );
  }
}

Shift.propTypes = {
  shiftValues: PropTypes.array.isRequired,
  handleShiftChange: PropTypes.func.isRequired,
  currentShiftValue: PropTypes.string.isRequired
};

export default Shift;
