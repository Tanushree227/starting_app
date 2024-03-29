//Week3 Learning: Navigations and Routing
import React from "react";
import bg1 from "./bg1.jpg";

export default function Week3() {
  return (
    <div>
    <div className="d-flex justify-content-center align-content-center">
      <div className=" card shadow-lg m-5 p-5 w-75">
        <h1 className="card-title text-center">Navigation</h1>
        <p className="card-text">
          <strong>Why use React router?</strong> It allows you to build single
          page web applications (SPA) with navigation. React Router uses
          component structure to call components, which display the appropriate
          information.
        </p>
        <p>
          React router is a library that allows you to handle routes in a web
          app, using dynamic routing. Dynamic routing takes place as the app is
          rendering on your machine, unlike the old routing architecture where
          the routing is handled in a configuration outside of a running app.
        </p>
      </div>
      </div>
      <div className="d-flex justify-content-center align-content-center">
      <div className="card shadow-lg m-5 p-5 w-75">
        <h1 className="card-title text-center">Using Assets in React</h1>
        <img className="w-50 mt-3 card-img" src={bg1} alt="background pic" />
        <p></p>
      </div>
      </div>
    </div>
  );
}
