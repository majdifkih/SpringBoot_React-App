import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";

import App from "../App";
import axios from "axios";

vi.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({ data: [] });
  axios.post.mockResolvedValue({ data: {} });
});

describe("Integration API test", () => {
  it("submit form calls API", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByPlaceholderText("Nom complet"), "Majdi");

    await user.type(screen.getByPlaceholderText("Email"), "majdi@test.com");

    await user.type(screen.getByPlaceholderText("Mot de passe"), "123");

    await user.click(screen.getByText("Ajouter utilisateur"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
  }, 10000);
});
