import React, { useState, useReducer, useEffect } from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import "./App.css";


const ACTIONS = {
  INITIALIZE_TIMES: "INITIALIZE_TIMES",
  UPDATE_TIMES: "UPDATE_TIMES"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE_TIMES:
      return {
        availableTimes: initializeTimes(),
      };
    case "UPDATE_TIMES":
      return {
        availableTimes: updateTimes(action.payload),
      };
    default:
      return state;
  }
};


export const initializeTimes = () => {
  
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (selectedDate) => {
  // code to update available times based on the selected date
  // for now, return the same available times
  return initializeTimes();
};

// components to be included booking page, specials (food)
function App() {
  
  const [state, dispatch] = useReducer(reducer, { availableTimes: [] });

  const [time, setTime] = useState("17:00");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleTimeChange = (e) => {
    const selectedDate = new Date(); // replace with your logic to get the selected date
    setTime(e.target.value);
    const newAvailableTimes = updateTimes(selectedDate);
    setAvailableTimes(newAvailableTimes);
    dispatch({ type: ACTIONS.UPDATE_TIMES, payload: newAvailableTimes });
  };

  // const handleTimeChange = (e) => {
  //   console.log(e.target.value);
  //   setTime(e.target.value);
  //   dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
  // };

  // initialize the availableTimes state when the component mounts
   useEffect(() => {
    dispatch({ type: "INITIALIZE_TIMES" });

    const fetchData = async () => {
      const date = new Date();
      const apiScript = await import("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js");
      const content = await apiScript.fetchAPI(date);
      console.log(content);
    };
  
    fetchData();
  }, []);

  return (
    <React.Fragment className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/booking-page"
            element={
              <BookingPage
                availableTimes={state.availableTimes}
                time={time}
                onTimeChange={handleTimeChange}
              />
            }
          />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
