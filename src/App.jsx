import { AppRouter } from "./Router/AppRouter";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className="w-full h-full flex justify-center align-center"></div>
      <Nav />
      <div className="flex flex-col justify-center items-start bg-black not-italic">
        <AppRouter />
        <hr className="relative w-2/3 mx-auto top-0 h-[2px] min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" />
        <Footer />
      </div>
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="ml-2 mt-[calc(100vh)] sticky no-underline px-2 py-1 text-white text-2xl bg-[#00cb2f] rounded-[30%] bottom-10 left-0"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default App;
