/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "../../routes";
import audi from "../../assets/img/audi-logo-2.png"

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-gray-100 pb-10 shadow-2xl shadow-white/5 transition-all ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[10px] flex items-center`}>
        <img className="h-20 w-24" src={audi} alt="logo"/>
      </div>
      <div className="mt-[px] mb-7 h-px bg-gray-300 dark:bg-white/30" />

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

   
    </div>
  );
};

export default Sidebar;
