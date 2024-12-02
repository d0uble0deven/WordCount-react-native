import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useInput } from "./hooks/InputHook";
import StatsDisplay from "./components/StatsDisplay";
import TextInputForm from "./components/TextInputForm";

export default function App() {
  const { value, bind, reset } = useInput("");
  const [wordCount, setWordCount] = useState(0);
  const [minutesToRead, setMinutesToRead] = useState(0);
  const [minutesToSpeak, setMinutesToSpeak] = useState(0);

  const calculate = () => {
    if (value.length === 0) {
      resetStats();
      return;
    }
    const words = value.split(" ").filter((word) => word.length > 0);
    setWordCount(words.length);
    setMinutesToRead(Math.ceil(words.length / 250));
    setMinutesToSpeak(Math.ceil(words.length / 130));
  };

  const resetStats = () => {
    setWordCount(0);
    setMinutesToRead(0);
    setMinutesToSpeak(0);
  };

  const handleClear = () => {
    reset();
    resetStats();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={["orange", "rgba(70, 155, 224, 0.9)"]}
        style={styles.background}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.plaque}>
            <Text style={styles.heading}>
              <Text>Welcome to</Text>
              {"\n"}
              <Text style={styles.title}>WordCount</Text>
            </Text>
            <View style={styles.statsContainer}>
              <StatsDisplay label="Number of words" value={wordCount} />
              <StatsDisplay
                label="Time to read"
                value={minutesToRead}
                unit="minute(s)"
              />
              <StatsDisplay
                label="Time to speak"
                value={minutesToSpeak}
                unit="minute(s)"
              />
            </View>
            <View style={styles.divider} />
            <TextInputForm
              value={value}
              onChangeText={bind.onChange}
              onSubmit={calculate}
              onClear={handleClear}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  plaque: {
    backgroundColor: "rgba(0, 70, 128, 0.99)",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // transform: [{ skewY: "-12deg" }],
  },
  heading: {
    marginBottom: 20,
    color: "rgb(70, 155, 224)",
    fontSize: 24,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  title: {
    fontSize: 36,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  statsContainer: {
    alignItems: "flex-end",
  },
  divider: {
    height: 1,
    backgroundColor: "white",
    marginVertical: 20,
  },
});
