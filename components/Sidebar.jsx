import { BiLogOut, BiTransfer } from "react-icons/bi";
import { RiDashboardFill, RiBillFill } from "react-icons/ri";
import { SiChatbot } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
const Sidebar = () => {
  const [showTransferDropdown, setShowTransferDropdown] = useState(false);

  const toggleTransferDropdown = () => {
    setShowTransferDropdown(!showTransferDropdown);
  };
  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">IEEE BANK</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              href="/dashboard"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <RiDashboardFill />
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/statement"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <RiBillFill />
              </span>
              <span className="text-sm font-medium">Statement</span>
            </Link>
          </li>
          <li>
            <div
              onClick={toggleTransferDropdown}
              className="flex flex-row items-center h-12 cursor-pointer transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <BiTransfer />
              </span>
              <span className="text-sm font-medium">Transfer</span>
              <span className="inline-flex items-center justify-center h-6 w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`transform transition-transform ${
                    showTransferDropdown ? "-rotate-180" : ""
                  } ml-1`}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </span>
            </div>
            {showTransferDropdown && (
              <ul className="ml-10 mt-1">
                <li>
                  <Link
                    href="/debit-transfer"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <BiTransfer />
                    </span>
                    <span className="text-sm font-medium">Debit Transfer</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/credit-transfer"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <BiTransfer />
                    </span>
                    <span className="text-sm font-medium">Credit Transfer</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/Family"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <MdOutlineFamilyRestroom />
              </span>
              <span className="text-sm font-medium">Family Members</span>
            </Link>
          </li>

          <li>
            <Link
              href="/chatbot"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <SiChatbot />
              </span>
              <span class="text-sm font-medium">Chat</span>
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <BiLogOut />
              </span>
              <span class="text-sm font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
