import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect, vi, beforeEach } from "vitest";
import axios from "axios";

vi.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({ data: [] });
});

describe("Form test", () => {
  it("renders inputs", async () => {
    render(<App />);

    expect(screen.getByPlaceholderText("Nom complet")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  }, 10000);
});
