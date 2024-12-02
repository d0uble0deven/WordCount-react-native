import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";

// Mock the LinearGradient component
jest.mock("expo-linear-gradient", () => ({
  LinearGradient: "LinearGradient",
}));

// Mock the StatusBar component
jest.mock("expo-status-bar", () => ({
  StatusBar: "StatusBar",
}));

describe("App", () => {
  it("renders correctly", () => {
    const { getByText, getAllByText, getByPlaceholderText } = render(<App />);

    expect(getAllByText(/Welcome to/i)[0]).toBeTruthy();
    expect(getByText("WordCount")).toBeTruthy();
    expect(getByText("Number of words: 0")).toBeTruthy();
    expect(getByText("Time to read: 0 minute(s)")).toBeTruthy();
    expect(getByText("Time to speak: 0 minute(s)")).toBeTruthy();
    expect(getByPlaceholderText("Enter your text here...")).toBeTruthy();
    expect(getByText("SUBMIT")).toBeTruthy();
    expect(getByText("CLEAR")).toBeTruthy();
  });

  it("calculates word count and times correctly", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText("Enter your text here...");
    const submitButton = getByText("SUBMIT");

    fireEvent.changeText(input, "This is a test sentence with seven words.");
    fireEvent.press(submitButton);

    expect(getByText("Number of words: 8")).toBeTruthy();
    expect(getByText("Time to read: 1 minute(s)")).toBeTruthy();
    expect(getByText("Time to speak: 1 minute(s)")).toBeTruthy();
  });

  it("clears input and resets stats", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText("Enter your text here...");
    const submitButton = getByText("SUBMIT");
    const clearButton = getByText("CLEAR");

    fireEvent.changeText(input, "This is a test sentence.");
    fireEvent.press(submitButton);
    fireEvent.press(clearButton);

    expect(getByText("Number of words: 0")).toBeTruthy();
    expect(getByText("Time to read: 0 minute(s)")).toBeTruthy();
    expect(getByText("Time to speak: 0 minute(s)")).toBeTruthy();
    expect(input.props.value).toBe("");
  });
});
