# SocialCoin

A place to reward good deeds

## Inspiration

As a part of the Orientation Hackathon, we had to use one of the Open Source Softwares that we'll be contributing to. We decided to use Dfinity since we had never heard of it before and was exciting to look into. We decided to work on a social media app called SocialCoin - a place where users can exchange virtual currency, as it would fit well in the ideals of the Internet Computer, where users can have an Open Network and secure methods to exchange information. The project was also inspired by the concept of evaluating the Social Capital (how much a certain thing will cost in terms of benefit/damage to society) of a certain activity in addition to the Economic capital. 
 
## What it does

SocialCoin is a Social Media App, which works as follows-
- A user starts out with 1000 virtual coins when they enter the system.
- Users can follow other users over the system.
- Then users can award the people they follow with coins, when they help them or do something worth appreciation.
- A user can also receive more currency in the same way, through their followers.

## Setup

#### Prerequisites

Dfinity 0.7.1. Checkout the [Installation Guide](https://sdk.dfinity.org/docs/download.html) to install it on your machine.

Clone the repo and open a terminal.

Start the dfinity server.
```
dfx start
```
On a seperate terminal window, create the canisters. This step is required only the first time.
```
dfx canister create --all
```
To build and install the canisters, type in -
```
dfx deploy
```
You can now run the project on 
```
http://localhost:8000/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai
```
The url requires the canisterId of our_app_assets, the canister where the frontend is hosted.


## How we built it

As a team of four, we created issues that we'll have to tackle and assigned it among each other. We used Github for managing issues and pull request reviews. SocialCoin's backend is hosted on the Internet Computer and written in Motoko. The frontend is written with the Tailwind Css framework and javascript.

## Challenges we ran into

Dfinity is a brand new Ecosystem. It is in the introductory stages, has a relatively small community as of now and missing pieces in documentation, so it was harder to work around some issues we encountered.
 
## Accomplishments that we're proud of

- Being able to collaborate and communicate smoothly in a team despite of different time zones.
- Being able to create a project with a software that we weren't familiar with.

## What we learned

- We learned about Dfinity and the internet computer, it also gave us the opportunity to explore a new language - motoko.
- How to collaborate on a project with a team and follow best open source practices as well.

## What's next for SocialCoin

There's a lot of features that can be added on top of our project like -
- Setting up a virtual store to redeem coins.
- Setting up comments on award activities.
- Possibly adding a way to exchange actual currency with users. 
