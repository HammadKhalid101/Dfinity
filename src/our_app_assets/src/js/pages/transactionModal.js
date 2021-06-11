export const transactionModal = () => (
    `<div
    class="flex h-screen bg-gray-200 items-center justify-center"
  >
    <div
      class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 transfer-container"
    >
      <div class="flex justify-center py-4">
        <div
          class="
            flex
            bg-purple-200
            rounded-full
            md:p-4
            p-2
            border-2 border-purple-300
          "
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            ></path>
          </svg>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex">
          <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
            Social Coin
          </h1>
        </div>
      </div>
        <div class="grid grid-cols-1">
          <label
            class="
              uppercase
              md:text-sm
              text-xs text-gray-500 text-light
              font-semibold
            "
            >Please write an ammount
          </label>
          <input
            class="
              py-2
              px-3
              rounded-lg
              border-2 border-purple-300
              mt-1
              focus:outline-none
              focus:ring-2 focus:ring-purple-600
              focus:border-transparent
            "
        id="amount"
            type="text"
            placeholder="ex. 100"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
        <button
          class="
            w-auto
            bg-purple-500
            hover:bg-purple-700
            rounded-lg
            shadow-xl
            font-medium
            text-white
            px-4
            py-2
          "
      id="transferButton"
        >
          Transfer
        </button>
    <span id="info-box-transfer" class="md:text-2xl text-xl"></span>
      </div>
      </div>
    </div>
  </div>`
)

//  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
//         <div class="grid grid-cols-1">
//           <label
//             class="
//               uppercase
//               md:text-sm
//               text-xs text-gray-500 text-light
//               font-semibold
//             "
//             >Lookup username by id</label
//           >
//           <input
//             class="
//               py-2
//               px-3
//               rounded-lg
//               border-2 border-purple-300
//               mt-1
//               focus:outline-none
//               focus:ring-2 focus:ring-purple-600
//               focus:border-transparent
//             "
//             type="text"
//         id="userIdToLookup"
//             placeholder="ex. 2"
//           />
//           <button
//             id="getUserById"
//             class="
//               w-auto
//               bg-purple-500
//               hover:bg-purple-700
//               rounded-lg
//               shadow-xl
//               font-medium
//               text-white
//               px-4
//               py-2
//             "
//           >
//             Lookup
//           </button>
//           <span id="info-box"></span>
//         </div>
//         <div class="grid grid-cols-1">
//           <label
//             class="
//               uppercase
//               md:text-sm
//               text-xs text-gray-500 text-light
//               font-semibold
//             "
//             >Check balance by id</label
//           >
//           <input
//             class="
//               py-2
//               px-3
//               rounded-lg
//               border-2 border-purple-300
//               mt-1
//               focus:outline-none
//               focus:ring-2 focus:ring-purple-600
//               focus:border-transparent
//             "
//             type="text"
//         id="balanceIdToLookup"
//             placeholder="ex. 3"
//           />
//           <button
//             id="getBalanceById"
//             class="
//               w-auto
//               bg-purple-500
//               hover:bg-purple-700
//               rounded-lg
//               shadow-xl
//               font-medium
//               text-white
//               px-4
//               py-2
//             "
//           >
//             Get balance
//           </button>
//           <span id="info-box-balance"></span>
//         </div>
//       </div>

//       <div class="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-8 mt-5 mx-7">
//         <h1 class="md:text-2xl text-xl">Transfer between accounts:</h1>
//       </div>
//       <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
//         <div class="grid grid-cols-1">
//           <label
//             class="
//               uppercase
//               md:text-sm
//               text-xs text-gray-500 text-light
//               font-semibold
//             "
//             >Account 1 (from) id:
//           </label>
//           <input
//             class="
//               py-2
//               px-3
//               rounded-lg
//               border-2 border-purple-300
//               mt-1
//               focus:outline-none
//               focus:ring-2 focus:ring-purple-600
//               focus:border-transparent
//             "
//         id="fromUserId"
//             type="text"
//             placeholder="ex. 2"
//           />
//         </div>
//         <div class="grid grid-cols-1">
//           <label
//             class="
//               uppercase
//               md:text-sm
//               text-xs text-gray-500 text-light
//               font-semibold
//             "
//             >Account 2 (to) id:
//           </label>
//           <input
//             class="
//               py-2
//               px-3
//               rounded-lg
//               border-2 border-purple-300
//               mt-1
//               focus:outline-none
//               focus:ring-2 focus:ring-purple-600
//               focus:border-transparent
//             "
//         id="toUserId"
//             type="text"
//             placeholder="ex. 3"
//           />
//         </div>