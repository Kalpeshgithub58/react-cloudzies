import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./static/static";

const Router = () => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={`/${route.name}`}
            exact={true}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

export default Router;
