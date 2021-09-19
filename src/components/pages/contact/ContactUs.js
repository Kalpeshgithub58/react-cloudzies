import React, { useState } from "react";
import Header from "../../common/header/Header";
import "./ContactUs.scss";

const initialState = {
  firstName: "",
  lastName: "",
  message: "",
};

const ContactUs = () => {
  const [state, setState] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Header />
      <div>
        <h1>SpaceX Form</h1>
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
                  value={state.firstname}
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
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
