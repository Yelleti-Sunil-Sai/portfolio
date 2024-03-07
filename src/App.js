import meniimage from "./menimage.png";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="App">
      <nav className="flex justify-between items-center px-[12%]">
        <img
          src="https://imgs.search.brave.com/mN1dRtmddmqOOu9005LbLO5zK1g_f_fb-E39ujxoPes/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/OTA2LzcwNC9zbWFs/bC9zYWktbGV0dGVy/LWxvZ28tZGVzaWdu/LW9uLXdoaXRlLWJh/Y2tncm91bmQtc2Fp/LWNyZWF0aXZlLWNp/cmNsZS1sZXR0ZXIt/bG9nby1jb25jZXB0/LXNhaS1sZXR0ZXIt/ZGVzaWduLXZlY3Rv/ci5qcGc"
          alt="logo"
          className="h-24 "
        />
        <div className="flex gap-10 ">
          <a className="list-none underlin cursor-pointer">Home</a>
          <a className="list-none underlin cursor-pointer" href="#About">
            About Me
          </a>
          <a className="list-none underlin cursor-pointer" href="#Contact">
            Contact
          </a>
          <a className="list-none underlin cursor-pointer">Hire Me</a>
        </div>
      </nav>
      <div className="flex justify-between items-center px-[12%] mt-20">
        <div className=" ">
          <h1 className="font-bold text-6xl opacity-70 leading-20">
            Hello My name is
          </h1>
          <p className="font-bold text-6xl opacity-70 leading-20 primary-color mt-3">
            Sunil Sai
          </p>
          <p className="w-96 mt-10 text-lg opacity-70">
            Hi, I'm Sunil Sai, an Electronics and Communication Engineering
            student with a keen interest in computers, software, cloud and web
            development
          </p>
          <div className="mt-10 flex gap-5">
            <button className="bg-[#3175bb] hover:bg-white hover:text-[#3175bb] hover:border-2 hover:border-[#3175bb] h-8 w-24 rounded-full text-white ">
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/sunilsai-yelleti-a51884247/"
              className="ml-3 bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white h-8 w-24 rounded-full text-center "
            >
              Hire Me{" "}
            </a>
          </div>
        </div>
        <div className="fancy-border overflow-hidden bg-primary h-[380px] box-shadow w-[323px] flex justify-center items-center">
          <img src={meniimage} className="h-[100%]" alt="" />
        </div>
      </div>
      <div className="mt-40">
        <center className="text-3xl font-bold opacity-70" id="About">
          About Me
        </center>
        <div className="h-[80vh] px-[15%] flex justify-between items-center">
          <div className="fancy-border overflow-hidden mt-20 bg-primary h-[380px] box-shadow w-[323px] flex justify-center items-center">
            <img src={meniimage} className="h-[100%]" alt="" />
          </div>
          <div className=" font-sans flex h-[50%] items-center justify-center">
            <div className="p-8">
              <div className="max-w-md mx-10">
                <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md">
                  <button
                    onClick={() => setOpenTab(1)}
                    className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                      openTab === 1 ? "bg-blue-600 text-white" : " "
                    }`}
                  >
                    OverView
                  </button>
                  <button
                    onClick={() => setOpenTab(2)}
                    className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                      openTab === 2 ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => setOpenTab(3)}
                    className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                      openTab === 3 ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    Projects
                  </button>
                </div>

                <div
                  className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${
                    openTab === 1
                      ? "border-blue-600"
                      : "border-transparent display-none"
                  }`}
                >
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600">
                    Overview Content
                  </h2>
                  <p className="text-gray-700">
                    <li>Designing web interfaces.</li>
                    <li>Creating dynamic pages. Responsive web sites.</li>
                    <li>Velo by WIX UI Branded app Basic Java Script.</li>
                  </p>
                </div>

                <div
                  className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${
                    openTab === 2
                      ? "border-blue-600"
                      : "border-transparent display-none"
                  }`}
                >
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600">
                    Skills
                  </h2>
                  <p className="text-gray-700">
                    <li>Velo by WIX (Same as editor like VsCode in wix ) </li>
                    <li>UI designing</li>
                    <li>Branded app</li>
                    <li>Basic Java Script.</li>
                  </p>
                </div>

                <div
                  className={`transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 ${
                    openTab === 3
                      ? "border-blue-600"
                      : "border-transparent display-none"
                  }`}
                >
                  <h2 className="text-2xl font-semibold mb-2 text-blue-600">
                    Projects
                  </h2>
                  <p className="text-gray-700">
                    <a href="https://yelletisunilsai130.wixsite.com/gaming">
                      https://yelletisunilsai130.wixsite.com/gaming
                    </a>{" "}
                    <br />
                    <a href="https://yelletisunilsai130.wixstudio.io/deejee">
                      https://yelletisunilsai130.wixstudio.io/deejee
                    </a>{" "}
                    <br />
                    <a href="https://yelletisunilsai130.wixsite.com/kalanidhithemes">
                      https://yelletisunilsai130.wixsite.com/kalanidhithemes
                    </a>{" "}
                    <br />
                    <a href="https://yelletisunilsai130.wixsite.com/bostami">
                      https://yelletisunilsai130.wixsite.com/bostami
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-white ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2
            class="mb-4 text-3xl font-bold opacity-70 tracking-tight text-center  "
            id="Contact"
          >
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm bg-primary font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <footer class="bg-white rounded-lg shadow m-4  ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">
            © 2024 <a class="hover:underline">SunilSai™</a>. All Rights
            Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
            <li>
              <a href="#About" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Hire Me
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sunilsai-yelleti-a51884247/"
                class="hover:underline me-4 md:me-6"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="#Contact" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
