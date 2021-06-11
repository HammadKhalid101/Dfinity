import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as our_app_idl,
  canisterId as our_app_id,
} from "dfx-generated/our_app";

const agent = new HttpAgent();
const our_app = Actor.createActor(our_app_idl, {
  agent,
  canisterId: our_app_id,
});

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

document.getElementById("getUserById").addEventListener("click", async () => {
  const userId = parseInt(document.getElementById("userIdToLookup").value.toString());
  const theUser = await our_app.get(userId);
  console.log(theUser);

  document.getElementById("info-box").innerText = theUser.username;
});
