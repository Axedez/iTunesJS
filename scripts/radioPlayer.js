export const radioPlayerInit = () => {
    console.log('RadioInit');

// Variables

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeader = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');

// Audio constructor

    const audio = new Audio();
    audio.type = "audio/aac";

// Radio button was blocked

    radioStop.disabled = true;

// Function for changing radio button icon

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    }
// Function for selecting items
    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    };
// Event for playing radio stations

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parrent = target.closest('.radio-item');
        selectItem(parrent);
        const title = parrent.querySelector('.radio-name').textContent; //Text inside parrent
        radioHeader.textContent = title;

        const urlImg = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;


        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    })

//Event for stopping radio

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    })

    radioVolume.addEventListener('input', () => {
        audio.volume = radioVolume.value / 100;
    })
    audio.volume = radioVolume.value / 100;
    radioVolume.value = audio.volume * 100;



};

