import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const icons = [<FaFacebookF />, <FaTwitter />, <FaInstagram />];
  return (
    <ul className="flex justify-center items-center text-white gap-4 py-5 lg:justify-end lg:py-0 lg:pr-20 lg:pb-10 relative">
      {icons.map((icon) => (
        <li className="border-2 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer active:text-purple-500">
          {icon}
        </li>
      ))}
    </ul>
  );
};

export default Footer;
