import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("Form test", () => {
  it("renders inputs", () => {
    render(<App />);

    expect(screen.getByPlaceholderText("Nom complet")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });
});
