import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-5 px-7 lg:px-15 sm:flex sm:justify-center lg:flex lg:justify-start transition-all duration-500 ease-in-out">
      <img
        src={logo}
        alt="logo"
        className="w-1/2 lg:w-1/8 sm:w-1/7 content-center "
      />
    </header>
  );
};

export default Header;
