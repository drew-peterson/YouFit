import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  SectionList,
  WebView,
  TouchableOpacity
} from "react-native";

import YouTube from "../components/YouTube";

class Workout extends Component {
  selectWorkout(title) {
    const { navigation } = this.props;
    navigation.navigate("Detail", { data: title });
  }

  renderListItem(item) {
    return (
      <TouchableOpacity onPress={() => this.selectWorkout(item)}>
        <Text style={styles.item}>{item}</Text>
      </TouchableOpacity>
    );
  }

  renderList() {
    return (
      <SectionList
        sections={[
          {
            title: "A",
            data: [
              "Test",
              "Test",
              "Test",
              "Test",
              "Test",
              "Test",
              "Test",
              "Test",
              "Test"
            ]
          },
          {
            title: "B",
            data: ["BenchPress"]
          }
        ]}
        renderItem={({ item }) => this.renderListItem(item)}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    );
  }
  render() {
    return <View style={styles.container}>{this.renderList()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  }
});

export default Workout;
