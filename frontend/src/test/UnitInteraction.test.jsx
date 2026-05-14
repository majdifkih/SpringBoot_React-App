import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";

vi.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({ data: [] });
});

describe("Interaction test", () => {
  it("updates input", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Nom complet");

    fireEvent.change(input, {
      target: { value: "Majdi" },
    });

    expect(input.value).toBe("Majdi");
  }, 10000);
});
