import React from "react";
import { Link } from "react-router-dom";
import {
  ChartBarIcon,
  UsersIcon,
  SupportIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ExclamationIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

function Sidebar(props) {
  return (
    <div className="fixed z-20 h-full top-0 left-0 pt-16 hidden lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                >
                  <ChartBarIcon className="h-6 w-6" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/diseases"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <ExclamationIcon className="h-6 w-6" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Diseases
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/specialists"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <SupportIcon className="h-6 w-6" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Specialists
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <DocumentTextIcon className="h-6 w-6" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Blogs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/certificates"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <AcademicCapIcon className="h-6 w-6" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Certificates
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <UsersIcon className="w-6 h-6" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Doctors</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                >
                  <LogoutIcon className="w-6 h-6" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
