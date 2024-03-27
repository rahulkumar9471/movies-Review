import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks";

const Navbar = () => {

  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="bg-secondary shadow-sm shadow-gray-500">
        <Container className=" p-2">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="./educationtoday.webp" alt="" className="h-10" />
            </Link>
            <ul className="flex items-center space-x-4">
              <li>
                <button onClick={toggleTheme} className="bg-dark-subtle p-1 rounded">
                  <li>
                    <BsFillSunFill className="text-secondary" size={24} />
                  </li>
                </button>
              </li>
              <li>
                <input
                  type="text"
                  className="border-2 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white"
                  placeholder="Search..."
                />
              </li>
              <li className="text-white font-semibold text-lg">
                <Link to="/auth/sign-in">Sign In</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
