const start = () => {
    setTimeout(function() {
        confetti.start()
    },10* 1000);
};

//  Stop

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    },15*1000);
};
(function(){
const whell = document.querySelector('.whell');
const startButton = document.querySelector('.button');
let deg = 0;
startButton.addEventListener('click',() =>{
start();
stop();

var audio = new Audio('audio.mp3');
audio.play();
// startButton.getElementsByClassName.pointerEvents = 'none';
deg  = Math.floor(5000+Math.random()*5000);
whell.style.transition  ='10s';
whell.style.transform = `rotate(${deg}deg)`;
// whell.classList.add('blur');
}
)
})();


