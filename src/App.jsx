import { AppRouter } from "./Router/AppRouter";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <AppRouter />
      <div className="bottom-0 left-0 right-0 mx-auto w-full">
        <Footer />
      </div>
      {/* <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="ml-2 mt-[calc(100vh)] sticky no-underline px-2 py-1 text-white text-2xl bg-[#00cb2f] rounded-[30%] bottom-10 left-0"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a> */}
    </div>
  );
};

export default App;
