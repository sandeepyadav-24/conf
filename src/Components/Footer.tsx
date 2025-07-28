import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-red-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <div className="h-8 mr-3">
                <img src="/Logo.jpeg" alt="Logo" className="h-9" />
              </div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                ICAC2N-25
              </span>
            </a>
            <p className="my-4 max-w-xs text-white">
              International Conference on Advances in Computing, Communication
              and Networking (ICAC2N–25)
            </p>
            <div className="w-fit bg-gray-50 flex justify-center items-center pl-1 pr-2 rounded-md">
              <img
                src="https://media.licdn.com/dms/image/C4D0BAQH-OlyJBTqhuA/company-logo_200_200/0/1630473042878?e=2147483647&v=beta&t=il1n47KyKRuG5dCfX41lmyt8PZj5_YNPvvRYuNNG8Ro"
                alt="IEEE UP Logo"
                className="w-[130px] h-[60px] object-cover"
              />
            </div>
          </div>
          {/**<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Important
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a className="hover:underline">Dates</a>
                </li>

                <li>
                  <a className="hover:underline">Downloads</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Resources
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a className="hover:underline">Register</a>
                </li>
                <li>
                  <a className="hover:underline">Guidelines</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Latest
              </h2>
              <ul className="text-gray-200 font-mediums">
                <li className="mb-4">
                  <a className="hover:underline">Speakers</a>
                </li>
                <li>
                  <a className="hover:underline">Committee</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <hr className="my-3 border-red-400 sm:mx-auto dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-100">
            <a href="" className="hover:underline mt-2 py-3">
              Department of Computer Science and Engineering, ITSEC
            </a>
            <p className="py-1 block">
              Developed by
              <a href="https://github.com/sandeepyadav-24"> Sandeep Yadav, </a>
              <a href="https://github.com/Faizanusmani06"> Moh Faizan, </a>
              <a href="https://github.com/TheGamingBaba"> Suyash Gautam</a>
            </p>
          </span>
          <div className="flex mt-4 space-x-6 text-2xl text-white sm:justify-center sm:mt-0">
            <Link
              to="https://twitter.com/ITSengggn/"
              aria-label="icac3n twitter"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="cursor-pointer grow-on-hover hover:text-sky-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                </g>
              </svg>
            </Link>
            <Link to="tel:+91-7835878146" aria-label="icac3n phone">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="cursor-pointer  grow-on-hover hover:text-emerald-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"></path>
                </g>
              </svg>
            </Link>
            <Link
              to="https://www.facebook.com/ITSengggn?mibextid=ZbWKwL"
              aria-label="icac3n facebook"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="cursor-pointer  grow-on-hover hover:text-indigo-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"></path>
                </g>
              </svg>
            </Link>
            <Link to="mailto:dean.cse@its.edu.in" aria-label="icac2n mail">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="cursor-pointer  grow-on-hover hover:text-amber-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"></path>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
