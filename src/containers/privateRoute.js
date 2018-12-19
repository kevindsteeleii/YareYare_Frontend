import React from "react";
import { Redirect, Route } from "react-router-dom";
import { authRoute } from "../actions/_helper";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props => 
        authRoute() 
          ? (<Component {...props} />)
          : < Redirect 
            to={{ pathname: "/login" }}
            />
      }
  />)
}

export default PrivateRoute;