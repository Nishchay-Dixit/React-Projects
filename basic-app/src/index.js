import React from "react";
import RectDOM from "react-dom/client";

import "./index.css";

const rootElement = document.getElementById("root");
const root = RectDOM.createRoot(rootElement);

const Header = (props) => {
  return (
    <>
      <div class="header">
        <a href="#default" class="logo">
          {props.site_name}
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            {props.name}
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
};

const Home = (props) => {
  return (
    <>
      <hr />
      <h4>Welcome Message</h4>
      <hr />
      <h1>
        {props.massage} {props.name}
      </h1>
      <h3>
        {props.location} {props.state}
      </h3>
      <p>
        The family’s excitement over going to Disneyland was crazier than she
        anticipated.
      </p>
      <p>Wakeup to reality!</p>
    </>
  );
};

const Student = (props) => {
  return (
    <>
      <hr />
      <h1>Student Info</h1>
      <h3>{props.name}</h3>
      <h3>{props.spi}</h3>
      <h3>College: DU</h3>
      <h3>{props.sem}</h3>
    </>
  );
};

const College = (props) => {
  return (
    <>
      <hr />
      <h1>College Info</h1>
      <h3>Welcome to,</h3>
      <h3>{props.name}</h3>
      <h3>{props.location}</h3>
      <h3>{props.corse}</h3>
    </>
  );
};

const Subject = (props) => {
  return (
    <>
      <hr />
      <h1>Subject Info</h1>
      <h3>{props.name}</h3>
      <h3>{props.sem}</h3>
      <h3>Web Tech.</h3>
      <h3>Difficulty {props.level}</h3>
    </>
  );
};

root.render(
  <>
    <Header site_name="My-App" name="Home" />
    <Home
      massage="Welcome,"
      name="Nishchay"
      state="Gujarat"
      location="Rajkot"
    />
    <Student name="abc" spi="9.0" sem="5th" />
    <College name="DU" location="Rajkot" corse="CE" />
    <Subject name="React" sem="5th" level="low" />
  </>
);
