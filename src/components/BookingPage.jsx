import React, { useEffect, useState } from "react";
import "./BookingPage.css";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstLastName: "",
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "/confirmation",
      search: `?name=${formValues.firstLastName}&date=${formValues.date}&time=${formValues.time}&numberOfGuests=${formValues.numberOfGuests}&occasion=${formValues.occasion}`,
    });
  };

  console.log("Form values: ", formValues);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    const dateInput = document.getElementById("date");
    if (dateInput) {
      dateInput.setAttribute("min", today);
    }
  }, []);

  return (
    <div className="bookingPage">
      <div className="bookingPage__container">
        <form
          className="bookingPage__container-form"
          onSubmit={handleFormSubmit}
        >
          <h1>Reserve a table</h1>
          <label htmlFor="firstLastName">First and Last Name</label>
          <input
            required
            name="firstLastName"
            type="text"
            id="firstLastName"
            value={formValues.firstLastName}
            onChange={handleFormChange}
          />

          <label htmlFor="date">Choose date</label>
          <input
            required
            name="date"
            type="date"
            id="date"
            value={formValues.date}
            onChange={handleFormChange}
          />

          <label htmlFor="time">Choose time</label>
          <select
            required
            name="time"
            id="time"
            value={formValues.time}
            onChange={handleFormChange}
          >
            <option value="">Choose Time</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>

          <label htmlFor="numberOfGuests">Number of guests</label>
          <input
            required
            name="numberOfGuests"
            type="number"
            id="numberOfGuests"
            min="1"
            max="12"
            value={formValues.numberOfGuests}
            onChange={handleFormChange}
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            required
            name="occasion"
            id="occasion"
            value={formValues.occasion}
            onChange={handleFormChange}
          >
            <option value="">Choose occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>

          <button type="submit">Confirm Reservation</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
