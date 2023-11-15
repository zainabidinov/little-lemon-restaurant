import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  

  return (
    <React.Fragment>
      <Header />
      <BookingForm availableTimes={props.availableTimes} time={props.time} onTimeChange={props.onTimeChange} />
      <Footer />
    </React.Fragment>
  );
};

export default BookingPage;
