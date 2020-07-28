import {  radioPlayerInit  } from './radioPlayer.js'
import {  musicPlayerInit  } from './musicPlayer.js'
import {  videoPlayerInit  } from './videoPlayer.js'


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


const deactivation = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
};


playerBtn.forEach((button, index) => button.addEventListener('click' , () => {
    deactivation();
    button.classList.add('active');
    playerBlock[index].classList.add('active');
}));

console.dir(document);
radioPlayerInit();
musicPlayerInit();
videoPlayerInit();