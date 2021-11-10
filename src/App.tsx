import { useEffect } from "react";
import { useBeforeunload } from "react-beforeunload";

// Logo
import FunnyDrawing from "@styles/statics/FunnyDrawing.svg";

// redux
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

// firebase
import { db } from "@api/firebase/firebase";

// tailwind utility
import { tw } from "@utils/tailwindClass";

// React Router
import { BrowserRouter as Router, Link } from "react-router-dom";

import SwitchRoutes from "./SwitchRoutes";

// Particles
import { BgParticles } from "@components/BgParticles/BgParticles";

export const App = () => {
  const room = useSelector((state: RootState) => state.roomReducer);
  const player = useSelector((state: RootState) => state.playerReducer);

  // Update players when user leave page :D
  useBeforeunload((event) => {
    db.collection("rooms")
      .doc(room.id)
      .update({
        players: room.players.filter((p: any) => p.name !== player.name),
      });
  });

  useEffect(() => {}, [room]);

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
          <SwitchRoutes />
        </main>
      </div>
    </Router>
  );
};
