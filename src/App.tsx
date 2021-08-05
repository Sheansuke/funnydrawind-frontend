// Logo
import FunnyDrawing from "@styles/statics/FunnyDrawing.svg";

// tailwind utility
import { tw } from "@utils/tailwindClass";

// React Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Particles
import { BgParticles } from "@components/BgParticles/BgParticles";

// PAGES
import Home from "@pages/Home";
import PreSala from "./pages/PreSala";
import Sala from "./pages/Sala";

export const App = () => {
  return (
    <Router>
      <BgParticles />
      <div className={tw("  top-0 absolute flex flex-col h-screen  ")}>
        <header className={tw("text-4xl text-blue-100 h-20  p-4 ")}>
          <Link to="/">
            <img
              src={FunnyDrawing}
              alt="funnydrawing"
              className={tw("w-60 cursor-pointer")}
            />
          </Link>
          <svg />
        </header>
        <main className={tw("flex flex-grow")}>
          <Switch>
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
        </main>
      </div>
    </Router>
  );
};
