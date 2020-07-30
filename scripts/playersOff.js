export const TurnOffAllPlayers = () => {
    //Veriables

    const playerBtn = document.querySelectorAll('.player-btn');

    playerBtn.forEach((button, index) => button.addEventListener('click' , () => {
        const stopPlay = play => {
            if (play.paused) {
                play.play();
            } else {
                play.pause();
            }
        }
    }));
}