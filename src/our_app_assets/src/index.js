import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as our_app_idl, canisterId as our_app_id } from 'dfx-generated/our_app';

import { injectHtml } from "./js/util";
import { dashboardHTML } from './js/pages/dashbord'
import { authHTML } from './js/pages/auth'
import { profileHTML } from './js/pages/profile'
import { transactionModal } from './js/pages/transactionModal';


const agent = new HttpAgent();
const our_app = Actor.createActor(our_app_idl, { agent, canisterId: our_app_id });

// Create new User

// maybe userId should be assigned in the backend

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomNum = getRandomInt(1000000);

function createUser (username) {
  our_app
  .create(
    {
      id: randomNum,
      username: username,
      coin: 1000,
      followers: [],
      activity: [],
    },
    randomNum
  )
  .then((result) => {
    console.log("creating user", result)
  })
  .catch((err) => console.log(err));
}

// Get User

function getUser (id) {
  our_app
  .get(id)
  .then((result) => {
    console.log("getting user", result)
  })
  .catch((err) => console.log(err));
}

// const some_users = [
//   {
//     id: 1,
//     username: "kurt",
//     coin: 1000,
//     followers: [],
//     activity: [],
//   },
//   {
//     id: 2,
//     username: "alan",
//     coin: 1000,
//     followers: [],
//     activity: [],
//   },
//   {
//     id: 3,
//     username: "alonzo",
//     coin: 1000,
//     followers: [],
//     activity: [],
//   },
//   {
//     id: 4,
//     username: "leslie",
//     coin: 1000,
//     followers: [],
//     activity: [],
//   },
// ];

// for (let usr of some_users) {
//   our_app
//     .create(usr, usr.id)
//     .then((result) => {
//       console.log(usr.username, "added");
//     })
//     .catch((err) => console.log(err));
// }

// document.getElementById("getUserById").addEventListener("click", async () => {
//   const userId = parseInt(
//     document.getElementById("userIdToLookup").value.toString()
//   );
//   const theUser = await our_app.get(userId);
//   console.log(theUser);

//   document.getElementById("info-box").innerText = theUser.username;
// });

// document
//   .getElementById("getBalanceById")
//   .addEventListener("click", async () => {
//     const userId = parseInt(
//       document.getElementById("balanceIdToLookup").value.toString()
//     );
//     const balance = await our_app.getBalance(userId);
//     console.log(balance);

//     document.getElementById("info-box-balance").innerText = balance;
//   });

// document.getElementById("transferButton").addEventListener("click", () => {
//   const fromuserId = parseInt(
//     document.getElementById("fromUserId").value.toString()
//   );
//   const touserId = parseInt(
//     document.getElementById("toUserId").value.toString()
//   );
//   const amount = parseInt(document.getElementById("amount").value.toString());

//   let result = "";
//   our_app
//     .transferCoin(fromuserId, touserId, amount)
//     .then((res) => (result = res))
//     .catch((err) => (result = "Couldn't complete transfer!"));
//   console.log(result)

//   document.getElementById("info-box-transfer").innerText = result;
// });


document.addEventListener("DOMContentLoaded", () => {
  console.log("Docu has loaded")

  const state = {
    users: [],
    transactions: [],
    activities: [],
  };

  console.log("Creating user")
  createUser("Hammad");
  console.log("getting user")
  getUser(randomNum);

// index-body element
// replace innerHTML if page needs to be changed 

// elements which will have eventListeners or have their content replaced are below

  let indexBody = document.getElementById("index-body");
  let signInLink = document.getElementById('sign-in-link')

  // Inserts dashboardHTML

  signInLink.addEventListener('click', () => {
    console.log("clicked sign-in-link")
    indexBody.innerHTML = dashboardHTML()

      // Inserts transctionHTML

      let transctionModal = document.getElementById('transaction-modal');
      transctionModal.addEventListener('click', () => {
        console.log('clicked transaction-modal');
        indexBody.innerHTML = transactionModal();
        const some_users = [
          {
            id: 1,
            username: "kurt",
            coin: 1000,
            followers: [],
            activity: [],
          },
          {
            id: 2,
            username: "alan",
            coin: 1000,
            followers: [],
            activity: [],
          },
          {
            id: 3,
            username: "alonzo",
            coin: 1000,
            followers: [],
            activity: [],
          },
          {
            id: 4,
            username: "leslie",
            coin: 1000,
            followers: [],
            activity: [],
          },
        ];
        
        for (let usr of some_users) {
          our_app
            .create(usr, usr.id)
            .then((result) => {
              console.log(usr.username, "added");
            })
            .catch((err) => console.log(err));
        }

        // document.getElementById("getUserById").addEventListener("click", async () => {
        //   const userId = parseInt(
        //     document.getElementById("userIdToLookup").value.toString()
        //   );
        //   const theUser = await our_app.get(userId);
        //   console.log(theUser);
        
        //   document.getElementById("info-box").innerText = theUser.username;
        // });
        
        // document
        //   .getElementById("getBalanceById")
        //   .addEventListener("click", async () => {
        //     const userId = parseInt(
        //       document.getElementById("balanceIdToLookup").value.toString()
        //     );
        //     const balance = await our_app.getBalance(userId);
        //     console.log(balance);
        
        //     document.getElementById("info-box-balance").innerText = balance;
        //   });
        
        // document.getElementById("transferButton").addEventListener("click", () => {
        //   const fromuserId = parseInt(
        //     document.getElementById("fromUserId").value.toString()
        //   );
        //   const touserId = parseInt(
        //     document.getElementById("toUserId").value.toString()
        //   );
        //   const amount = parseInt(document.getElementById("amount").value.toString());
        
        //   let result = "";
        //   our_app
        //     .transferCoin(fromuserId, touserId, amount)
        //     .then((res) => (result = res))
        //     .catch((err) => (result = "Couldn't complete transfer!"));
        //   console.log(result)
        
        //   document.getElementById("info-box-transfer").innerText = result;
        // });
      })

      // Inserts profileHTML

      let profileLink = document.getElementById('profile-link');
      profileLink.addEventListener('click', () => {
        console.log("clicked profile-link")
        indexBody.innerHTML = profileHTML()
      })
    })
})