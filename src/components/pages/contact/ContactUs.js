import React, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../../common/header/Header";
import "./ContactUs.scss";

const initialState = {
  firstName: "",
  lastName: "",
  message: "",
};

const ContactUs = () => {
  const history = useHistory();
  const [state, setState] = useState(initialState);
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(!display);
    if (state.message) {
      setMessage(state.message);
      setTimeout(() => {
        setDisplay(false);
        history.push("/");
      }, 2000);
    } else {
      setMessage("Please Enter Your Message");
      setTimeout(() => {
        setDisplay(false);
      }, 2000);
    }

    setState(initialState);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="contact-center">SpaceX Form</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your name"
                  value={state.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Last Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={state.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">message</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="message"
                  placeholder="Enter Your Messages"
                  value={state.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="submit-button">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <div id="snackbar" className={display && message ? "show" : null}>
        {message}
      </div>
    </>
  );
};

export default ContactUs;
