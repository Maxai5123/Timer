let timer
let timerOn = false
let hours = 0
let minutes = 0
let seconds = 0

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function increamentTimer() {
    seconds++
    if (seconds === 60) {
        seconds = 0
        minutes++
        if (minutes === 60) {
            minutes = 0
            hours++
        }
    }
    let timer = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)
    let timerElement = document.getElementById('timer')
    timerElement.innerText = timer
}

function startTimer() {
    if (!timerOn) {
        timerOn = true
        timerView = setInterval(increamentTimer, 1000)
    }
}

function stopTimer() {
    if (timerOn) {
        timerOn = false
        clearInterval(timerView)
    }
}

function resetTimer() {
    stopTimer()
    hours = 0
    minutes = 0
    seconds = 0
    document.getElementById('timer').innerText = "00:00:00"
}