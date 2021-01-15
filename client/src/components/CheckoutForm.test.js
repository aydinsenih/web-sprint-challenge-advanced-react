import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";
import useForm from "./../hooks/useForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);

  userEvent.type(firstName, "Senih");
  userEvent.type(lastName, "Aydin");
  userEvent.type(address, "1234 Washington blvd.");
  userEvent.type(city, "Los Angeles");
  userEvent.type(state, "CA");
  userEvent.type(zip, "90232");

  const button = screen.getByRole("button");
  userEvent.click(button);

  expect(await screen.findByText(/Senih/)).toBeInTheDocument();
  expect(await screen.findByText(/Aydin/)).toBeInTheDocument();
  expect(await screen.findByText(/1234 Washington blvd./)).toBeInTheDocument();
  expect(await screen.findByText(/Los Angeles/)).toBeInTheDocument();
  expect(await screen.findByText(/CA/)).toBeInTheDocument();
  expect(await screen.findByText(/90232/)).toBeInTheDocument();
});
