import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const TextInputForm = ({ value, onChangeText, onSubmit, onClear }) => (
  <View>
    <TextInput
      style={styles.textInput}
      multiline
      value={value}
      onChangeText={onChangeText}
      placeholder="Enter your text here..."
      placeholderTextColor="rgba(255, 255, 255, 0.5)"
    />
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onClear}>
        <Text style={styles.buttonText}>CLEAR</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  textInput: {
    minHeight: 150,
    borderRadius: 4,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "white",
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TextInputForm;
