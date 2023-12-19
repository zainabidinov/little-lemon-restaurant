import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import { ConfirmationPage } from "./components/ConfirmationPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
