import React from "react";
import { AppRouter } from "./Router/AppRouter";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <div className="min-h-screen color-white flex flex-col justify-center items-start bg-black font-black not-italic">
        <AppRouter></AppRouter>
        <hr className="relative w-2/3 mx-auto top-0 h-[2px] min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" />
        <Footer />
      </div>

    </>
  );
};

export default App;
