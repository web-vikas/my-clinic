import { useState, useEffect } from "react";
import {
  FaHome,
  FaClipboard,
  FaInbox,
  FaUsers,
  FaBox,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { useAuth } from "../../components/auth/auth";
import { Link, useNavigate } from "react-router-dom";
export const DashboardContainer = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const sidebarLinks = [
    { text: "Dashboard", icon: <FaHome />, href: "/doctor" },
    { text: "Appointments", icon: <FaUsers />, href: "/doctor/appointments" },
    { text: "Profile", icon: <FaUserDoctor />, href: "/doctor/profile" },
    { text: "Slots", icon: <FaUserDoctor />, href: "/doctor/slots" },
  ];
  // Step 1: Read initial toggle state from local storage
  const initialToggleState =
    localStorage.getItem("sidebarToggleState") === "true";

  // Step 1: Initialize state with the value from local storage
  const [isSidebarOpen, setIsSidebarOpen] = useState(initialToggleState);

  // Step 1: Update state and local storage when the toggle state changes
  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem("sidebarToggleState", newState.toString());
  };

  // Step 1: Add a useEffect to set the initial state only once during component mount
  useEffect(() => {
    setIsSidebarOpen(initialToggleState);
  }, []);

  const handelLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <>
      <div>
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              {sidebarLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {link.icon}
                    <span className="ms-3">{link.text}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handelLogout}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
                >
                  <FaSignInAlt />
                  <span className="ms-3">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <div className={`${isSidebarOpen ? "ml-64" : "ml-0"}`}>
          <div className="p-3 shadow-lg">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleSidebar}
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className=""
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
              <div>
                <p className="uppercase h-12 w-12 rounded-full bg-red-500 font-extrabold grid place-content-center text-3xl text-white leading-4">
                  {auth?.user?.email[0] || "N"}
                </p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
