import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as our_app_idl, canisterId as our_app_id } from 'dfx-generated/our_app';

const agent = new HttpAgent();
const our_app = Actor.createActor(our_app_idl, { agent, canisterId: our_app_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await our_app.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
