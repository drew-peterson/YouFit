import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Youtube from "../components/YouTube";

export default props => {
  const title = props.navigation.state.params.data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How To {title} properly</Text>
      <View style={styles.youtTubeContainer}>
        <Youtube />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingTop: 20
  },
  youtTubeContainer: {
    height: 300,
    width: 300,
    marginTop: 25
  },
  title: {
    fontSize: 22
  }
});
