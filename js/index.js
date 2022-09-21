const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

//Eventos para los clicks de los botones del reproductor
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

//Funciones de botones del Reproductor
//Reproducir video
function handlePlay (){
    $video.play()
    $play.hidden =  true
    $pause.hidden = false
}

//Pausar video
function handlePause(){
    $video.pause()
    $play.hidden = false    
    $pause.hidden = true
}

//Retroceder 10 segs
function handleBackward(){
    $video.currentTime -= 10  
}

//Adelantar 10 segs
function handleForward(){
    $video.currentTime += 10  
}

//Barra de Duracion del video
const $progress = document.querySelector('#progressBar') 
//Eventos
$video.addEventListener('loadmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)

//Obtener duracion maxima del video
function handleLoaded(){
    $progress.max = $video.duration
}

//Movimiento de la duracion
function handleTimeUpdate(){
    $progress.value = $video.currentTime
}

//Control de la barra
function handleInput(){
    $video.currentTime = $progress.value
}