export const dashboardHTML = () => (
   `<div id="root">
      <nav
        class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div
          class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto"
        >
          <button
            class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onclick="toggleNavbar('example-collapse-sidebar')"
          >
            <i class="fas fa-bars"></i></button
          >
          <a
            class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            href="javascript:void(0)">
            Menu
          </a>
            <ul>
              <li class="items-center">
                <a
                  class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  href=""
                  ><i class="fas fa-tv opacity-75 mr-2 text-sm"></i>
                  Your Transactions</a>
              </li>
              <li class="items-center">
                <a
                  class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  href=""
                  ><i class="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>
                  Your Awards</a
                >
              </li>
              <li class="items-center">
                <a
                  class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  href="#/profile"
                  ><i class="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>
                  Your Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="relative md:ml-64 bg-blueGray-50">
        <nav
          class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
        >
          <div
            class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
          >
            <h1 class="text-white text-lg uppercase hidden lg:inline-block font-semibold">Home</h1>
            <form
              class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
            >
              <div class="relative flex w-full flex-wrap items-stretch">
                <span
                  class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                  ><i class="fas fa-search"></i
                ></span>
                <input
                  type="text"
                  placeholder="Search here..."
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
            <ul
              class="flex-col md:flex-row list-none items-center hidden md:flex"
            >
              <a class="text-blueGray-500 block" href="#pablo" onclick="openDropdown(event,'user-dropdown')">
                <div class="items-center flex">
                  <span
                    class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
                    ><img
                      alt="..."
                      class="w-full rounded-full align-middle border-none shadow-lg"
                      src="./assets/img/team-1-800x800.jpg"
                  /></span>
                </div>
              </a>
            </ul>
          </div>
        </nav>
        <!-- Header -->
        <div class="relative bg-blue-900 md:pt-32 pb-12 pt-12">
          <div class="px-4 md:px-10 mx-auto w-full">
            <div>
              <!-- Card stats -->
              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4">
                      <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                            Your Coins
                          </h5>
                          <span class="font-semibold text-xl text-blueGray-700">
                            350,897
                          </span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                          <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500">
                            <i class="fas fa-coins"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4">
                      <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                            Your Donations
                          </h5>
                          <span class="font-semibold text-xl text-blueGray-700">
                            2,35600
                          </span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                          <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                            <i class="fas fa-handshake"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4">
                      <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                            Your Homies
                          </h5>
                          <span class="font-semibold text-xl text-blueGray-700">
                            924
                          </span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                          <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                            <i class="fas fa-users"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
        <div class="px-4  mx-auto w-full -m-0">
          <div class="p-8">
          <figure class="md:flex bg-blueGray-200 rounded-xl p-5">
            <div class="space-y-4">
               <figcaption class="font-medium">
                <div class="text-cyan-600">
                  <b>Alex189</b> awarded <b>SarahTaylor</b> 8000 coins!
                </div>
                </figcaption>
                <blockquote>
                  <p class="text-lg font-semibold">
                    “Sarah is awesome. She really helped me out with my job 
                    applications and encouraged me throughout the process”
                  </p>
                </blockquote>
               </div>
          </figure>
          </div>
          <div class="p-8">
            <figure class="md:flex bg-blueGray-200 rounded-xl p-5">
              <div class="space-y-4">
                 <figcaption class="font-medium">
                  <div class="text-cyan-600">
                    <b>Alex189</b> awarded <b>SarahTaylor</b> 8000 coins!
                  </div>
                  </figcaption>
                  <blockquote>
                    <p class="text-lg font-semibold">
                      “Sarah is awesome. She really helped me out with my job 
                      applications and encouraged me throughout the process”
                    </p>
                  </blockquote>
                 </div>
            </figure>
            </div>
        </div>
    </div>`
)