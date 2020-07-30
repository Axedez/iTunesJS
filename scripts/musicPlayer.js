import { addZero } from './supScript.js';
export const musicPlayerInit = () => {
    
    //Setting up veriables

    const audio = document.querySelector('.audio');
    const audioImg = document.querySelector('.audio-img');
    const audioHeader = document.querySelector('.audio-header');
    const audioPlayer = document.querySelector('.audio-player');
    const audioNavigation = document.querySelector('.audio-navigation');
    const audioButtonPlay = document.querySelector('.audio-button__play');
    const audioProgress = document.querySelector('.audio-progress');
    const audioProrgressTiming = document.querySelector('.audio-progress__timing');
    const audioTimePassed = document.querySelector('.audio-time__passed');
    const audioTimeTotal = document.querySelector('.audio-time__total');
    const audioVolume = document.querySelector('.audio-volume');
    const volumeButtonUp = document.querySelector('.audio-volume-up');
    const volumeButtonOff = document.querySelector('.audio-volume-off');
    const playerBtn = document.querySelectorAll('.player-btn');


    //Import audio folder

    const playlist = ['hello', 'flow', 'speed'];
    let trackIndex = 0;

    // Function "Load track"

    const loadTrack = () => {
        const isPlayed = audioPlayer.paused;
        const track = playlist[trackIndex];
        audioImg.src = `./audio/${track}.jpg`;
        audioHeader.textContent = track.toUpperCase();
        audioPlayer.src = `./audio/${track}.mp3`;

        if (isPlayed) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
    };

    // Previous track event


    const prevTrack = () => {
        if (trackIndex !==0) {
            trackIndex--;
        } else {
            trackIndex = playlist.length - 1;
        }
        loadTrack();
    };

    // Next track event

    const nextTrack = () => {
        if (trackIndex === playlist.length - 1) {
            trackIndex = 0;
        } else {
            trackIndex++;
        }
        loadTrack();
    };

// Change Icons

    const changeIcon = () => {
        audio.classList.toggle('play');
        audioButtonPlay.classList.toggle('fa-play');
        audioButtonPlay.classList.toggle('fa-pause');
    };


    // Event control bar

    audioNavigation.addEventListener('click', event => {
        const target = event.target;

        if(target.classList.contains('audio-button__play')) {
            changeIcon();
            if (audioPlayer.paused){
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            };
            const track = playlist[trackIndex];
            audioHeader.textContent = track.toUpperCase();
        };            
            if (target.classList.contains('audio-button__prev')){
                prevTrack();
            };

            if (target.classList.contains('audio-button__next')){
                nextTrack();
            };
    });

    //Next track while songs end

    audioPlayer.addEventListener('ended', () => {
        nextTrack();
        audioPlayer.play();
    });
    
    // Time event for duration and progress bar

    audioPlayer.addEventListener('timeupdate', () => {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
        const progress = (currentTime / duration ) * 100;

        audioProrgressTiming.style.width = progress + '%';

        const minutesPassed = Math.floor(currentTime / 60) || '0';
        const secondPassed = Math.floor(currentTime % 60) || '0';
        
        const minutesTotal = Math.floor(duration / 60) || '0';
        const secondTotal = Math.floor(duration % 60) || '0';

        audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondPassed)}`;
        audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondTotal)}`;
    });

    // Click event on progress bar

    audioProgress.addEventListener('click', event => {
        const x = event.offsetX;
        const allWidth = audioProgress.clientWidth;
        const progress = (x / allWidth) * audioPlayer.duration;
        audioPlayer.currentTime = progress;
    });

    // Volume slide for music player

    volumeButtonUp.addEventListener('click', () => {
        audioPlayer.volume = 1;
        audioVolume.value = 100;
    });
    
    volumeButtonOff.addEventListener('click', () => {
        audioPlayer.volume = 0;
        audioVolume.value = 0;
    });

    // Loud range

    audioVolume.addEventListener('input', () => {
        audioPlayer.volume = audioVolume.value / 100;
    })
    audioPlayer.volume = audioVolume.value / 100;
    audioVolume.value = audioPlayer.volume * 100;

    // Music paused when user change tab

    playerBtn.forEach((button) => button.addEventListener('click' , () => {
            if (audioPlayer.paused == false){
                audioPlayer.pause();
                changeIcon();
            };
    }));


};
