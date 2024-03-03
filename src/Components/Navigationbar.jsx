import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { navs } from "../config/config";
import { v4 as uuidv4 } from "uuid";
import UserContext from "../Context/UserContext";
const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const {searchQuery, setsearchQuery} = useContext(UserContext);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    
  };
  const handleInputChange = (e) => {
    setsearchQuery(e.target.value);

  };

 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <nav className="bg-gray-800  top-0 w-full fixed  shadow-lg">
        <div className="max-w-7xl   w-screen m-0 ">
          <div className="flex  w-screen justify-between bg-gray-800  items-center h-16">
            <div className="flex-shrink-0 p-6">
              <span className="text-white font-bold">NewsApp</span>
            </div>
            <div className="">
              <form className="flex flex-grow" onSubmit={handleSubmit} >
              
                <input
                  type="text"
                  placeholder="Explore News"
                  className="p-2 outline-none rounded w-full sm:w-auto"
                  value={searchQuery||""}
                  onChange={handleInputChange}
                />
                <button
              onClick={handleSubmit}
              className="ms-2 bg-blue-900 font-bold text-white p-2 rounded"
                >
                    <NavLink
                className="  text-white   font-bold text-sm"
                to="/Search"
              >
               Submit
              </NavLink>
                </button>
              </form>
            </div>
            <div className="hidden  lg:block">
              <div className="flex p-6 items-baseline space-x-4">
                {navs.map((navItem) => (
                  <NavLink
                    className="  text-white   font-bold text-sm"
                    to={navItem.page}
                    key={uuidv4()}
                  >
                    {navItem.nav}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="block p-6 lg:hidden">
              <button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    
      {/* Mobile menu */}
      {isOpen && (
        <div className="z-50 lg:hidden h-screen w-3/5 top-16 block fixed right-0 ">
          <div className="flex justify-around ms-1 border-l-4 border-white items-center rounded-md h-3/5 w-full flex-col ps-3 bg-gray-700">
            {navs.map((navItem) => (
              <NavLink
                className="  text-white   font-bold text-sm"
                to={navItem.page}
                key={uuidv4()}
              >
                {navItem.nav}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigationbar;
