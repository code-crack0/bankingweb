import { BiLogOut ,BiTransfer} from 'react-icons/bi'
import { RiDashboardFill, RiBillFill } from "react-icons/ri";
import { SiChatbot } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div class="min-h-screen flex flex-row bg-gray-100">
      <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <div class="flex items-center justify-center h-20 shadow-md">
          <h1 class="text-3xl uppercase text-indigo-500">IEEE BANK</h1>
        </div>
        <ul class="flex flex-col py-4">
          <li>
            <Link
              href="/dashboard"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <RiDashboardFill/>
              </span>
              <span class="text-sm font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/statement"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <RiBillFill/>
              </span>
              <span class="text-sm font-medium">Statement</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <BiTransfer/>
              </span>
              <span class="text-sm font-medium">Transfer</span>
            </a>
          </li>
          
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <SiChatbot/>
              </span>
              <span class="text-sm font-medium">Chat</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <CgProfile/>
              </span>
              <span class="text-sm font-medium">Profile</span>
            </a>
          </li>
          <li>
            <Link
              href="/login"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <BiLogOut/>
              </span>
              <span class="text-sm font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar