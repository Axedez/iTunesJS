import { addZero } from './supScript.js';
export const videoPlayerInit = () => {

// video-player
// video-button__play
// video-button__stop
// video-time__passed
// video-progress
// video-time__total

// Setting variables

    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoVolume = document.querySelector('.video-volume');
    const volumeButtonUp = document.querySelector('.video-volume-up');
    const volumeButtonOff = document.querySelector('.video-volume-off');
    const videoFullScreen = document.querySelector('.video-fullscreen');
    const playerBtn = document.querySelectorAll('.player-btn');

// Changing icons pause/play

    const toggleIcon = () => {
        if (videoPlayer.paused){
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    };

// Function for playing video

    const togglePlay = () => {
        if (videoPlayer.paused){
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

// Events

    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);

    videoPlayer.addEventListener('play', toggleIcon);
    videoPlayer.addEventListener('pause', toggleIcon);

    videoButtonStop.addEventListener('click', stopPlay);

// Time update for video player

    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60);
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);
        
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
    })

// Video progress scale

    videoProgress.addEventListener('input', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    })

// FullScreen

    videoFullScreen.addEventListener('click', () => {
        videoPlayer.requestFullscreen();
    })

// Loud range

    videoVolume.addEventListener('input', () => {
        videoPlayer.volume = videoVolume.value / 100;
    })
    videoPlayer.volume = videoVolume.value / 100;
    videoVolume.value = videoPlayer.volume * 100;

// Click event on audio buttons

    volumeButtonUp.addEventListener('click', () => {
        videoPlayer.volume = 1;
        videoVolume.value = 100;
    });
    
    volumeButtonOff.addEventListener('click', () => {
        videoPlayer.volume = 0;
        videoVolume.value = 0;
    });

// Video paused when user change tab

    playerBtn.forEach((button) => button.addEventListener('click' , () => {
        if (videoPlayer.played){
            videoPlayer.pause();
        };
}));

};

