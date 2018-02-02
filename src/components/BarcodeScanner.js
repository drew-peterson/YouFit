import React, { Component } from "react";
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { BarCodeScanner, Permissions } from "expo";

class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    qrData: ""
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  renderQR() {
    const { qrData } = this.state;

    if (qrData) {
      return <Text style={styles.centerText}>You scanned {qrData}</Text>;
    }
    return (
      <BarCodeScanner
        onBarCodeRead={this._handleBarCodeRead}
        style={StyleSheet.absoluteFill}
      />
    );
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return (
        <Text style={styles.centerText}>Requesting for camera permission</Text>
      );
    } else if (hasCameraPermission === false) {
      return <Text style={styles.centerText}>No access to camera</Text>;
    } else {
      return <View style={{ flex: 1 }}>{this.renderQR()}</View>;
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    const { navigation } = this.props;
    this.setState({ qrData: data });
    navigation.navigate("Detail", { data });
  };
}

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    alignContent: "center",
    // alignSelf: "center",
    textAlign: "center"
  }
});

export default BarcodeScannerExample;
