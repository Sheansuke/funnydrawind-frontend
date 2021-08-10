import { memo } from "react";

// React Router
import { Switch, Route, useLocation } from "react-router-dom";

// PAGES
import Home from "@pages/Home";
import PreSala from "./pages/PreSala";
import Sala from "./pages/Sala";

const SwitchRoutes: React.FC = () => {
  let location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/preSala/:roomId">
        <PreSala />
      </Route>

      <Route path="/sala">
        <Sala />
      </Route>
    </Switch>
  );
};

export default memo(SwitchRoutes);
