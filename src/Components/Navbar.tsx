import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDownButton";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/*   ///////////////////////////////// Marquee ///////////////////////////////*/}
      <div className="py-1 px-3 bg-stone-800">
        <div className="relative flex overflow-x-hidden text-white text-sm">
          <Marquee speed={80}>
            <span className="mx-4">
              2nd International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              2nd International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
            <span className="mx-4">
              2nd International Conference on Advances in Computing,
              Communication and Networking- ICAC2N
            </span>
            <span className="mx-2">•</span>
          </Marquee>
        </div>
      </div>

      {/* ////////////////////////////////// Navbar UpData////////////////////////////////////*/}
      <nav className="bg-red-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between gap-y-6 mx-auto p-4">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="h-12">
                <img
                  src="https://res.cloudinary.com/dzgfsbzh6/image/upload/v1754138063/samples/Logo_a8pld4.jpg"
                  alt=""
                  className="h-[50px] w-[50px] mr-3"
                />
              </div>
              <span className="font-semibold text-2xl tracking-tight text-white mr-3">
                ICAC2N
              </span>
              <div className="bg-gray-50 flex justify-center items-center pl-1 pr-2 rounded-md">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQH-OlyJBTqhuA/company-logo_200_200/0/1630473042878?e=2147483647&v=beta&t=il1n47KyKRuG5dCfX41lmyt8PZj5_YNPvvRYuNNG8Ro"
                  alt=""
                  className="w-[90px] h-[50px] object-cover"
                />
              </div>
            </div>

            <div className="flex flex-row gap-1 justify-normal items-center">
              <Link
                to="https://cmt3.research.microsoft.com/ICAC2N2024"
                className="px-4 h-fit py-2 bg-sky-600 mx-2 rounded-lg  md:block text-white cursor-pointer "
              >
                Submit Paper
              </Link>
            </div>
          </div>
          <div className=" md:block">
            <ul className="flex flex-col gap-3 md:text-sm lg:gap-5 justify-between md:items-center items-start font-medium md:p-0 rounded-lg md:flex-row md:mt-0 md:border-0">
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/">HOME</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/about">ABOUT</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/guidelines">GUIDELINES</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/speakers">SPEAKERS</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <DropDown />
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/call-for-papers">CALL FOR PAPERS</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/register">REGISTER</Link>
                </li>
              </div>
              <div className="md:w-auto w-full">
                <li className="cursor-pointer text-white">
                  <Link to="/contact">CONTACT</Link>
                </li>
              </div>
              <div className=" flex md:w-auto w-full ml-5">
                <li
                  className="text-md my-4 text-white underline cursor-pointer"
                  onClick={handleOpen}
                >
                  CMT ACKNOWLEDGEMENT
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">CMT Acknowledgement</h2>
            <p className="mb-4 text-sm text-gray-700">
              The Microsoft CMT services was used for managing the
              peer-reviewing process for this conference. This service was
              provided for free by Microsoft and they bore all expenses,
              including costs for Azure cloud services as well as for software
              development and support.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleClose}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
