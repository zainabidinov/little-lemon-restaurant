import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

export const ConfirmationPage = () => {
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const navigate = useNavigate();

  return (
    <div className="confirmationPage">
      <div className="confirmationPage__container">
        <div className="confirmationPage__reservation">
          <h1>Reservation complete!</h1>
          <table className="confirmationPage__reservation-table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{params.get("name")}</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>{params.get("date")}</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>{params.get("time")}</td>
              </tr>
              <tr>
                <td>Guests:</td>
                <td>{params.get("numberOfGuests")}</td>
              </tr>
              <tr>
                <td>Occasion:</td>
                <td>{params.get("occasion")}</td>
              </tr>
            </tbody>
          </table>
          <p>
            Thank you for your reservation. <br /> Enjoy your
            dinner!
          </p>
          <button
            className="confirmationPage__reservation-button"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};
