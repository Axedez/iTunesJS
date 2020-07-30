// Imorting all media js scripts

import {  radioPlayerInit  } from './radioPlayer.js'
import {  musicPlayerInit  } from './musicPlayer.js'
import {  videoPlayerInit  } from './videoPlayer.js'

// Set variiables

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

// Function of deactivation classes "Active"

const deactivation = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
};

// Setting up class "Active" for buttons on main screen

playerBtn.forEach((button, index) => button.addEventListener('click' , () => {
    deactivation();
    button.classList.add('active');
    playerBlock[index].classList.add('active');
}));

// Initialization of imported JS scripts

console.dir(radioPlayerInit);
radioPlayerInit();
musicPlayerInit();
videoPlayerInit();
TurnOffAllPlayers();