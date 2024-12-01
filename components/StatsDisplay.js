import React from "react";
import { StyleSheet, Text } from "react-native";

const StatsDisplay = ({ label, value, unit }) => (
  <Text style={styles.text}>
    {label}: {value} {unit}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 16,
    marginVertical: 5,
    textAlign: "right",
  },
});

export default StatsDisplay;
