import React from "react";
import Dropdown from "../dropdown/index"
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";


import navbarimg from "../../assets/img/Navbar.webp"


const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;

  return (
    <nav className="sticky top-0 z-40 flex flex-row  items-center justify-between  bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]  border-b-2 ">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <span
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </span>
          <span
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
       
          >
            {brandText}
          </span>
        </div>
        <p className="shrink sm:text-[33px] text-[18px] capitalize text-navy-700 dark:text-white">
          <span
          
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </span>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-end gap-2 rounded-full dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-6 w-6" />
        </span>
        <Dropdown
                  button={
            <img
              className="h-10 w-10 rounded-full"
              src={navbarimg}
              alt="Elon Musk"
            />
                  } 
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    👋 Hey, Adela
                  </p>{" "}
                </div>
              </div>
              <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="flex flex-col p-4">
                <a
                  href=" "
                  className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Profile Settings
                </a>
           
                <Link
                  to="/login"
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </Link>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
