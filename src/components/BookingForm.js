import React, { useState, useEffect } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, time, onTimeChange }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validate();
  }, [date, guests, occasion, time]);

  const meeting = ["Birthday", "Occasion"];

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted!");
  };

  const validate = () => {
    // Check if the date is selected
    const isDateValid = date !== "";

    // Check if the number of guests is between 1 and 10
    const isGuestsValid = guests >= 1 && guests <= 10;

    // Check if the occasion is selected
    const isOccasionValid = occasion !== "";

    // Check if the time is available
    const isTimeValid = availableTimes.includes(time);

    // Check if the selected date is after today's date
    const selectedDate = new Date(date);
    const currentDate = new Date();
    const isDateAfterToday =
      selectedDate.getTime() >= currentDate.setHours(0, 0, 0, 0);

    setIsFormValid(
      isDateValid &&
        isGuestsValid &&
        isOccasionValid &&
        isTimeValid &&
        isDateAfterToday
    );
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          aria-label="Choose date"
          onChange={handleDateChange}
          value={date}
          type="date"
          id="res-date"
          required
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          aria-label="Choose time"
          id="res-time"
          value={time}
          onChange={onTimeChange}
        >
          {availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          aria-label="Number of guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          minLength="1"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          aria-label="Occasion"
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
        >
          {meeting.map((occasion) => {
            return <option key={occasion}>{occasion}</option>;
          })}
        </select>

        <input
          aria-label="Submit reservation"
          disabled={!isFormValid}
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </div>
  );
};

export default BookingForm;
