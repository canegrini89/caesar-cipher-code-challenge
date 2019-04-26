import React, { Component } from "react";
import Plaintext from "./components/Plaintext";
import Ciphertext from "./components/Ciphertext";
import Shift from "./components/Shift";
import Paper from "@material-ui/core/Paper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentShiftValue: "",
      shiftValues: ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      plainTextValue: "",
      cipherTextValue: ""
    };
  }

  handleShiftChange = e => {
    this.setState({ currentShiftValue: e.target.value });
  };

  handlePlainTextChange = e => {
    let plainText = e.target.value || "";
    let shiftValue = parseInt(this.state.currentShiftValue);
    const newValue = this.caesarCipher(plainText, shiftValue);
    this.setState({
      plainTextValue: e.target.value,
      cipherTextValue: newValue
    });
  };

  handleCiphertextChange = e => {
    let cipherText = e.target.value || "";
    let shiftValue = parseInt(this.state.currentShiftValue) * -1;
    const newValue = this.caesarCipher(cipherText, shiftValue);
    this.setState({
      cipherTextValue: e.target.value,
      plainTextValue: newValue
    });
  };

  caesarCipher(str, shiftNum) {
    const strAsArray = str.split("");
    const shifted = [];
    let minus = strAsArray.map(x => /[a-z]/.test(x));
    let mayus = strAsArray.map(x => /[A-Z]/.test(x));

    function shift(letter) {
      const sum = letter.charCodeAt(0) + shiftNum;
      if (sum > 122) {
        letter = String.fromCharCode(97 + (sum - 122) - 1);
      } else if (sum < 97) {
        letter = String.fromCharCode(122 - (97 - sum) + 1);
      } else {
        letter = String.fromCharCode(sum);
      }
      shifted.push(letter);
    }
    function shiftMayus(letter) {
      const sum = letter.charCodeAt(0) + shiftNum;
      if (sum > 90) {
        letter = String.fromCharCode(65 + (sum - 90) - 1);
      } else if (sum < 65) {
        letter = String.fromCharCode(90 - (65 - sum) + 1);
      } else {
        letter = String.fromCharCode(sum);
      }
      shifted.push(letter);
    }

    for (let i = 0; i < strAsArray.length; i++) {
      if (minus[i]) {
        shift(str[i]);
      } else if (mayus[i]) {
        shiftMayus(str[i]);
      } else {
        shifted.push(strAsArray[i]);
      }
    }

    return shifted.join("");
  }

  render() {
    return (
      <div className="container">
        <center>
          <h1>Caesar's Cipher</h1>
        </center>
        <Shift
          shiftValues={this.state.shiftValues}
          currentShiftValue={this.state.currentShiftValue}
          handleShiftChange={this.handleShiftChange}
        />
        <Paper elevation={10} className="child-container">
          <Plaintext
            plainTextValue={this.state.plainTextValue}
            handlePlainTextChange={this.handlePlainTextChange}
          />
          <Ciphertext
            cipherTextValue={this.state.cipherTextValue}
            handleCiphertextChange={this.handleCiphertextChange}
          />
        </Paper>
      </div>
    );
  }
}

export default App;
