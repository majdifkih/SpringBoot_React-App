import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("Interaction test", () => {
  it("updates input", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Nom complet");

    fireEvent.change(input, { target: { value: "Majdi" } });

    expect(input.value).toBe("Majdi");
  });
});
