import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

class Plaintext extends Component {
  render() {
    const { handlePlainTextChange, plainTextValue } = this.props;
    return (
      <div className="left">
        <center>
          <h2>Plaintext</h2>
          <TextField
            value={plainTextValue}
            onChange={handlePlainTextChange}
            name="plainTextValue"
            multiline
            rowsMax="10"
            margin="normal"
            placeholder="Enter plaintext"
          />
        </center>
      </div>
    );
  }
}

Plaintext.propTypes = {
  handlePlainTextChange: PropTypes.func.isRequired,
  plainTextValue: PropTypes.string.isRequired
};

export default Plaintext;
