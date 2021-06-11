import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as our_app_idl, canisterId as our_app_id } from 'dfx-generated/our_app';

import { injectHtml } from "./js/util";
import { dashboardHTML } from './js/pages/dashbord'
import { authHTML } from './js/pages/auth'
import { profileHTML } from './js/pages/profile'


const agent = new HttpAgent();
const our_app = Actor.createActor(our_app_idl, { agent, canisterId: our_app_id });

// Create new User

// maybe userId should be assigned in the backend

var loggedInUser;
var selectedUser;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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
      console.log("creating user", result)
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
let connectBtn = document.getElementById('connect-btn');
connectBtn.addEventListener('click', () => {
  follow(loggedInUser.id, selectedUser.id);
});


// function to login
function login(authId) {
  // Add Function to convert authId to id
  our_app
    .get(id)
    .then((result) => {
      this.loggedInUser = result;
    });
}
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
  let signInLink = document.getElementById('sign-in-link');
  // Inserts authHTML

  signInLink.addEventListener('click', () => {
    console.log("clicked sign-in-link")
    indexBody.innerHTML = authHTML()
    let signInButton = document.getElementById('sign-in-button');
    // Inserts dashboardHTML

    signInButton.addEventListener('click', () => {
      console.log("clicked sign-in-button")
      indexBody.innerHTML = dashboardHTML()

      let profileLink = document.getElementById('profile-link');
      profileLink.addEventListener('click', () => {
        console.log("clicked profile-link")
        indexBody.innerHTML = profileHTML()
      })
    })
  })



  // Inserts profileHTML



  // Inserts transctionHTML


})