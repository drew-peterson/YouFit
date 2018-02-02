import React from "react";
import { View, Text } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import Scan from "../screens/Scan";
import Workout from "../screens/Workout";
import Detail from "../screens/Detail";

const Tabs = TabNavigator(
  {
    Scan: {
      screen: Scan
    },
    Workout: {
      screen: Workout
    }
  },
  {
    tabBarPosition: "top",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#fff",
      style: {
        // backgroundColor: "#7393ea"
      },
      indicatorStyle: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 18
      }
    }
  }
);

export default StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: "YouFit",
      headerStyle: {
        backgroundColor: "#7393ea",
        elevation: 0
      },
      headerTitleStyle: {
        alignSelf: "center",
        color: "white"
      }
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.state.params.data
      };
    }
  }
});
