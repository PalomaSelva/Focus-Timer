const Button={
    play:document.querySelector('.play'),
    pause:document.querySelector('.pause'),
    stop:document.querySelector('.stop'),
    watch:document.querySelector('.watch'),
    soundOn:document.querySelector('.sound-on'),
    soundOff:document.querySelector('.sound-off')
}
const inputMinutes=document.querySelector('.time .minutes')
const inputSeconds=document.querySelector('.time .seconds')
let myInterval
let minutes
let seconds

Button.play.addEventListener('click',playCountdown)
Button.pause.addEventListener('click',pauseCountdown)
Button.stop.addEventListener('click',stopCountdown)
Button.watch.addEventListener('click',getMinutes)
Button.soundOn.addEventListener('click',turnSoundOff)
Button.soundOff.addEventListener('click',turnSoundOn)

function formatNumbers(minutes,seconds){
    inputMinutes.textContent=String(minutes).padStart(2,'0')
    inputSeconds.textContent=String(seconds).padStart(2,'0')
}

function countdown(){
    myInterval=setInterval(() => {
        seconds=Number(inputSeconds.textContent)
        if(inputSeconds.textContent=='00' && inputMinutes.textContent=='00' || inputMinutes.textContent==''){
            stopCountdown()
            return
        }
        if(inputSeconds.textContent=='00'){
            formatNumbers(--minutes,0)
            seconds=60
        }
        formatNumbers(minutes,--seconds)
    }, 1000);
}

function getMinutes(){
    minutes=prompt("Digite os minutos:")

    formatNumbers(minutes,0)
}
function playCountdown(){
    Button.play.classList.add('hide')
    Button.pause.classList.remove('hide')

    Button.watch.classList.add('hide')
    Button.stop.classList.remove('hide')

    countdown()
}
function pauseCountdown(){
    clearInterval(myInterval)
    showPlayButton()

    Button.pause.classList.add('hide')
    Button.play.classList.remove('hide')
}

function stopCountdown(){
    clearInterval(myInterval)
    inputMinutes.textContent='00'
    inputSeconds.textContent='00'

    showPlayButton()
    Button.stop.classList.add('hide')
    Button.watch.classList.remove('hide')
}

function showPlayButton(){
    Button.pause.classList.add('hide')
    Button.play.classList.remove('hide')
}

function turnSoundOff(){
    Button.soundOn.classList.add('hide')
    Button.soundOff.classList.remove('hide')
}
function turnSoundOn(){
    Button.soundOff.classList.add('hide')
    Button.soundOn.classList.remove('hide')
}
