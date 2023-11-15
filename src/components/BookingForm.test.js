import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm available times heading", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      time="18:00"
      onTimeChange={() => {}}
    />
  );
  const headingElement = screen.getByText("Choose time");
  expect(headingElement).toBeInTheDocument();
});

describe('validateDate function', () => {
  it('should return true for a valid date', () => {
    const validDate = '2022-12-31';
    const isValid = validateDate(validDate);
    expect(isValid).toBe(true);
  });

  it('should return false for an invalid date', () => {
    const invalidDate = 'invalid-date';
    const isValid = validateDate(invalidDate);
    expect(isValid).toBe(false);
  });
});

describe('<BookingForm />', () => {
  it('should disable the submit button when the form is invalid', () => {
    const { getByTestId } = render(<BookingForm />);
    const submitButton = getByTestId('submit-button');

    // Check that the submit button is disabled when the form is initially invalid
    expect(submitButton.disabled).toBe(true);

    // Set the form values to valid values
    const dateInput = getByTestId('date-input');
    fireEvent.change(dateInput, { target: { value: '2022-12-31' } });

    // Check that the submit button is enabled when the form is valid
    expect(submitButton.disabled).toBe(false);
  });
});