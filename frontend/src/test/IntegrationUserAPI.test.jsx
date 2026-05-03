import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import App from "../App";
import axios from "axios";

vi.mock("axios");

describe("Integration API test", () => {
  it("submit form calls API", async () => {
    const user = userEvent.setup();

    axios.post.mockResolvedValue({ data: {} });

    render(<App />);

    await user.type(screen.getByPlaceholderText("Nom complet"), "Majdi");
    await user.type(screen.getByPlaceholderText("Email"), "majdi@test.com");
    await user.type(screen.getByPlaceholderText("Mot de passe"), "123");

    await user.click(screen.getByText("Ajouter utilisateur"));

    expect(axios.post).toHaveBeenCalled();
  });
});
