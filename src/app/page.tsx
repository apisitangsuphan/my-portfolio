import Hero from "./components/Hero";
import Skill from "./components/Skill";

import DarkModeProvider from "./context/DarkModeContext";

import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className="">
      <DarkModeProvider>
        <Navbar />
        <Hero />
        <Skill />
      </DarkModeProvider>
    </div>
  );
}
