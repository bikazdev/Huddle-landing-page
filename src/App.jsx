import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Dev from "./Components/Dev";

const App = () => {
  return (
    <div className="h-screen flex flex-col  justify-around bg-[url(./assets/bg-mobile.svg)] bg-no-repeat bg-contain md:flex md:bg-[url(./assets/bg-desktop.svg)] transition-all duration-500 ease-in-out relative">
      <Header />
      <Main />
      <Footer />
      <Dev />
    </div>
  );
};

export default App;
