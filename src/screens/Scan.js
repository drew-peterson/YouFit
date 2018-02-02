import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Button
} from "react-native";

import BarcodeScanner from "../components/BarcodeScanner";

class Scan extends Component {
  state = {
    showScanner: false
  };

  renderButton() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => this.setState({ showScanner: true })}
      >
        <Text style={styles.buttonText}> Get Started!</Text>
      </TouchableHighlight>
    );
  }

  render() {
    const { showScanner } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Scan the QR code to learn about the equipment
        </Text>
        {/* <Text styles={{marginTop: 10}}>Hi Reed... secret code is: 'blue'</Text> */}
        {!showScanner && this.renderButton()}

        {showScanner && (
          <View style={styles.scannerContainer}>
            <BarcodeScanner navigation={navigation} />
            <Button
              title="cancel"
              onPress={() => this.setState({ showScanner: false })}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scannerContainer: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    overflow: "hidden"
  },
  container: {
    alignItems: "center",
    flex: 1
  },
  text: {
    fontSize: 22,
    marginBottom: 25,
    marginTop: "20%",
    textAlign: "center",
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 5,
    width: "60%"
  },
  buttonText: {
    fontSize: 24
    // fontWeight: "bold"
  }
});

export default Scan;
