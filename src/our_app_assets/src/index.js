import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as our_app_idl,
  canisterId as our_app_id,
} from "dfx-generated/our_app";

import { injectHtml } from "./js/util";
import { dashboardHTML } from "./js/pages/dashbord";
import { authHTML } from "./js/pages/auth";
import { profileHTML } from "./js/pages/profile";

const agent = new HttpAgent();
const our_app = Actor.createActor(our_app_idl, {
  agent,
  canisterId: our_app_id,
});

// Create new User
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
    followers: [1, 2],
    activity: [],
  },
  {
    id: 4,
    username: "leslie",
    coin: 1000,
    followers: [1, 2, 3],
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
// maybe userId should be assigned in the backend
async function transfer(fromuserId, touserId, amount, reason) {
  let result = "";
  our_app
    .transferCoin(fromuserId, touserId, amount, reason)
    .then((res) => (result = res))
    .catch((err) => (result = "Couldn't complete transfer!"));
  console.log(result);

  document.getElementById("info-box-transfer").innerText = result;
}
transfer(1, 2, 20, "Love 🥸");
transfer(1, 2, 50, "Pair programming 👨‍💻");
transfer(3, 1, 90, "Great empathy 🥰");

var loggedInUser;
var selectedUser;
var followerList = [1n, 2n, 3n];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getActivity() {
  console.trace("activity called");
  our_app.getActivities().then((res) => {
    res.forEach(async (item, index) => {
      console.log(item);
      if (
        followerList.indexOf(item.payee) > -1 ||
        followerList.indexOf(item.payer)
      ) {
        let payeeName = await our_app.get(item.payee);
        let payerName = await our_app.get(item.payer);
        var activity = document.getElementById("activity-feed");
        activity.innerHTML +=
          '<div class="p-8"> <figure class="md:flex bg-blueGray-200 rounded-xl p-5"> <div class="space-y-4"> <figcaption class="font-medium"> <div class="text-cyan-600"> <b>' +
          payeeName.username +
          "</b> awarded <b>" +
          payerName.username +
          "</b>&nbsp;" +
          item.coin +
          '&nbsp; coins  </div></figcaption><blockquote> <p class="text-lg font-semibold">“' +
          item.reason +
          "”</p></blockquote></div></figure></div>";
      }
    });
  });
}

let randomNum = getRandomInt(1000000);

function createUser(username) {
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
      console.log("creating user", result);
    })
    .catch((err) => console.log(err));
}

// Get User

function getUser(id) {
  our_app
    .get(id)
    .then((result) => {
      console.log("getting user", result);
      return result;
    })
    .catch((err) => console.log(err));
}

// Follow User
// Takes current user ID and Id of the user to follow as parameter

function follow(myId, userId) {
  our_app
    .get(myId)
    .then((result) => {
      let user = result;
      user.followers.push(userId);
      our_app.update(user).then((res) => {
        // Operation to do after successfully following
        console.log(res);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// function to login
function login(authId) {
  // Add Function to convert authId to id
  our_app.get(id).then((result) => {
    this.loggedInUser = result;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("Docu has loaded");

  const state = {
    users: [],
    transactions: [],
    activities: [],
  };

  console.log("Creating user");
  createUser("Hammad");
  console.log("getting user");
  getUser(randomNum);

  // index-body element
  // replace innerHTML if page needs to be changed

  // elements which will have eventListeners or have their content replaced are below

  let indexBody = document.getElementById("index-body");
  let signInLink = document.getElementById("sign-in-link");
  // Inserts authHTML

  signInLink.addEventListener("click", () => {
    console.log("clicked sign-in-link");

    indexBody.innerHTML = dashboardHTML();
    getActivity();

    let profileLink = document.getElementById("profile-link");
    profileLink.addEventListener("click", () => {
      console.log("clicked profile-link");
      indexBody.innerHTML = profileHTML();
      let connectBtn = document.getElementById("connect-btn");
      connectBtn.addEventListener("click", () => {
        follow(loggedInUser.id, selectedUser.id);
      });
    });
  });

  // Inserts profileHTML

  // Inserts transctionHTML
});
