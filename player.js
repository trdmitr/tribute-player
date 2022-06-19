let isPlaying = false;
const music = document.querySelector('audio');
// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

//pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// play pauser Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
 // вывод в DOM
 function loadSong(song) {
     title.textContent = song.displayName;
     artist.textContent = song.artist;
     music.src = `music/${song.displayName}.mp3`;
     image.src = `img/${song.name}.jpg`;
 }
  // текущая песня
 let songIndex = 0;
//prev song
 function prevSong() {
     songIndex--;
     if (songIndex < 0) {
         songIndex = songs.length - 1;
     }
    //  console.log(songIndex)
     loadSong(songs[songIndex]);
     playSong();
 }
//next song

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    //console.log(songIndex)
    loadSong(songs[songIndex]);
    playSong();

}
 // Выбор пестни
 loadSong(songs[songIndex]);

 module.exports = { isPlaying, function1 }