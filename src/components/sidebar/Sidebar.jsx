import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SportHubLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export function Sidebar() {
  return (
    <section className="relative max-w-screen-2xl mx-auto ">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                <img src={logo} alt="logo image" className="w-12 mb-3" />
                <span className="font-bold">
                  <span className="text-red-700">Sport</span> Hub
                </span>
              </a>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faHouse} />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/static"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faChartLine} />
                <span className="flex-1 ms-3 whitespace-nowrap">Static</span>
              </Link>
            </li>

            <li>
              <Link
                to="/users"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
