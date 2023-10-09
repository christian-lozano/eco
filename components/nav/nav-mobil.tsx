export default function NavMobil() {
  return (
    <div className="flex h-screen bg-blue-100 antialiased text-gray-900">
      <aside className="flex-shrink-0 p-4 w-72 h-full">
        <div className="flex flex-col h-full pt-12 pb-4 rounded-lg neumorphism-shadow">
          {/* <!-- Sidebar header --> */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-2 mx-4 rounded-lg neumorphism-shadow">
            <img
              className="w-12 h-12 p-px -mt-8 rounded-full neumorphism-shadow"
              src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
              alt="Ahmed Kamel"
              srcSet=""
            />
            <a
              href="https://github.com/Kamona-WD"
              target="_blank"
              className="mt-3 px-4 py-1 rounded-md text-xl font-semibold tracking-wider text-gray-600 hover:underline focus:ring focus:outline-none"
              rel="noreferrer"
            >
              Ahmed Kamel
            </a>
          </div>
          {/* <!-- Sidebar links --> */}
          <nav className="flex-1 max-h-full p-4 mt-6 overflow-y-hidden">
            <ul className="max-h-full p-2 space-y-1 overflow-y-auto divide-y divide-blue-300 neumorphism-shadow">
              {/* <!-- Dashboard link --> */}
              <li>
                <span
                  className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring"
                  data-bs-target="#dashboardCollapse"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="dashboardCollapse"
                >
                  <span>
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-medium">Dashboard</span>
                  <span className="ml-auto">
                    <svg
                      className="w-4 h-4 transition-transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </span>
                <ul className="collapse" id="dashboardCollapse">
                  <li>
                    <a
                      href="#"
                      className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                    >
                      Link one
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                    >
                      Link two
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                    >
                      Link three
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- Settings link --> */}
              <li>
                <span
                  className="flex items-center w-full px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:outline-none focus:ring"
                  data-bs-target="#settingsCollapse"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="settingsCollapse"
                >
                  <span>
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-medium">Settings</span>
                  <span className="ml-auto">
                    <svg
                      className="w-4 h-4 transition-transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </span>
                <ul className="collapse" id="settingsCollapse">
                  <li>
                    <a
                      href="#"
                      className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                    >
                      Link one
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                    >
                      Link two
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                    >
                      Link three
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex px-6 py-2 font-medium text-gray-600 transition-transform transform hover:translate-x-1"
                    >
                      Link four
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- Profile link --> */}
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-600 transition-transform transform rounded-md hover:translate-x-1 focus:ring focus:outline-none"
                >
                  <span>
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2 font-medium">Profile</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex-shrink-0 px-4 py-2">
            <span className="w-full px-4 py-2 text-lg font-medium text-center text-gray-600 transition-transform transform rounded-md hover:scale-105 neumorphism-shadow focus:outline-none focus:ring">
              Logout
            </span>
          </div>
        </div>
      </aside>
      <div className="flex-1">
        <main>
          <a
            href="https://github.com/Kamona-WD"
            target="_blank"
            className="p-3 neumorphism-shadow rounded-full fixed bottom-10 right-10 github-link focus:outline-none focus:ring"
            rel="noreferrer"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </main>
      </div>
    </div>
  )
}
