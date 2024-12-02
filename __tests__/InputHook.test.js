import { renderHook, act } from "@testing-library/react-native";
import { useInput } from "../hooks/InputHook";

describe("useInput", () => {
  it("initializes with the given value", () => {
    const { result } = renderHook(() => useInput("initial"));
    expect(result.current.value).toBe("initial");
  });

  it("updates value when setValue is called", () => {
    const { result } = renderHook(() => useInput(""));
    act(() => {
      result.current.setValue("new value");
    });
    expect(result.current.value).toBe("new value");
  });

  it("resets value when reset is called", () => {
    const { result } = renderHook(() => useInput("initial"));
    act(() => {
      result.current.setValue("new value");
    });
    act(() => {
      result.current.reset();
    });
    expect(result.current.value).toBe("");
  });

  it("updates value when bind.onChange is called", () => {
    const { result } = renderHook(() => useInput(""));
    act(() => {
      result.current.bind.onChange("new value");
    });
    expect(result.current.value).toBe("new value");
  });
});
