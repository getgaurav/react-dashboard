import React from "react";

export default function Footer() {
  return (
    <footer className="block py-4 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-b-1 border-blueGray-200 dark:border-gray-800" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-center mb-2 md:text-left md:mb-0">
              <a
                href="/"
                className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
              >
                Copyright © 2021 Redash
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
              <li>
                <a
                  href="/"
                  className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                >
                  Redash
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-blueGray-700 hover:text-blueGray-900 text-sm font-semibold block py-1 px-3"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
