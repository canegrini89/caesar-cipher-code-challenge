import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

class Ciphertext extends Component {
  render() {
    const { handleCiphertextChange, cipherTextValue } = this.props;
    return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            value={cipherTextValue}
            onChange={handleCiphertextChange}
            name="cipherTextValue"
            multiline
            rowsMax="10"
            margin="normal"
            placeholder="Enter ciphertext"
          />
        </center>
      </div>
    );
  }
}

Ciphertext.propTypes = {
  handleCiphertextChange: PropTypes.func.isRequired,
  cipherTextValue: PropTypes.string.isRequired
};

export default Ciphertext;
