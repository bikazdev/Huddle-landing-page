import illustrationMockups from "../assets/illustration-mockups.svg";

const Main = () => {
  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:mx-20">
      <img
        src={illustrationMockups}
        alt="illustratuion"
        className="select-none max-w-xs md:max-w-xl lg:max-w-2xl"
      />
      <div className="flex flex-col items-center text-center mx-10 lg:ml-20 gap-6 lg:text-left lg:items-start ">
        <h3 className="text-3xl lg:font-black lg:w-4/5 lg:leading-12 ">
          Build The Community Your Fans Will Love
        </h3>
        <p className="lg:w-7/8">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="px-22 py-3.5 rounded-full bg-white text-purple-500 shadow-none transition-shadow cursor-pointer active:shadow-lg active:text-pink-500 active:bg-pink-200 lg:shadow-none lg:active:shadow-xl ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Main;
