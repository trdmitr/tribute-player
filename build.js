document.addEventListener('DOMContentLoaded', () => {

    const src = [
        [
            "Виталий Подземный", "Черная Волга", "https://drive.google.com/uc?export=download&id=11lr_5AS2CW-Sc5GNuV1dyXlmgBNyGeKG",
            "https://sun9-west.userapi.com/sun9-54/s/v1/if2/Kas3ZayJT1cUz0XqcTgruytNGALR64AAD2559vtgUao9BdO8Nqr20sbvjoLgv3hRswfnR_GtbpzFkZlkfpxdCGbt.jpg?size=2560x1824&quality=96&type=album"
          ],
    
          [
            "Виталий Подземный", "Перемен", "https://drive.google.com/uc?export=download&id=1fRTIhCoCY5Gj1gtq7AKH13gqgmcmfYOH",
            "https://sun9-west.userapi.com/sun9-54/s/v1/if2/Kas3ZayJT1cUz0XqcTgruytNGALR64AAD2559vtgUao9BdO8Nqr20sbvjoLgv3hRswfnR_GtbpzFkZlkfpxdCGbt.jpg?size=2560x1824&quality=96&type=album"
          ],
          [
            "Artyom Smallkid", "Время есть", 
            "https://drive.google.com/uc?export=download&id=17ho5guMk-ZHmcol8G4a3cWqSGXC1gIrU",
            "https://sun9-east.userapi.com/sun9-20/s/v1/if1/RV3MYsymr16997zW5iqpXpkkJxQJaY0CRLb4djtWShX7bCRdQu96JMvpvbhNnAoy472sUg.jpg?size=2560x1696&quality=96&type=album"
          ],
          [
            "Жанат Акбулатов", "Мама-Анархия", "https://drive.google.com/uc?export=download&id=18DYMMv_3gI2fhkeGRsN3r--omMoXLfWm",
             "https://sun9-east.userapi.com/sun9-59/s/v1/if2/E8Tp_8c2ohYFCLtAirJe1uc7k5BTFyrfPSoAIbRX3gTb4nwn2Qr8S9oxga2QdgXeHQc5gjTgiMTofqK1rr120_iy.jpg?size=400x400&quality=95&type=album"
          ],
          [
            "Николай Зайцев", "Орбит без сахара", "https://drive.google.com/uc?export=download&id=1YvtHEmybr2Iq7zBiNppGxQEeM0wFGswE",
             "https://sun9-east.userapi.com/sun9-43/s/v1/if1/GwmwD98zYDjdBR55XFk9qmXZH6yiSpLY7E7vghBa738yPxmDQOVxgk9sGHcpAoQvCXTIkTM8.jpg?size=1620x2160&quality=96&type=album"
          ],
    
    ];

const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

const image = document.querySelector('.imagg img')

for (x = 0; x < src.length; x++) {
    var s = src[x];
    var number = parseInt(x) + 1;
    var artist = document.createTextNode(s[0]);
    var track_name = document.createTextNode(s[1]);
    const title = document.getElementById('titles')
    var img2 = new Image();
    var img2 = document.createElement('img'); // Используем HTMLImageElement
    img2.src = s[3];
    img2.alt = artist;
    // console.log(img2.alt)
    
    var listItem = document.createElement('div');
    var listItemSong = document.createElement('div');
    var listItemInf = document.createElement("div");
    var listItemImg = document.createElement('div');
    var listItemTit= document.createElement("div");
    var artist_text = document.createElement('h5');
    var track_text = document.createElement('p');
    
    artist_text.appendChild(artist);
    track_text.appendChild(track_name);
    // img2.appendChild(listItemImg);
    listItem.appendChild(listItemSong);
    
    listItemSong.appendChild(listItemInf);
    listItemInf.appendChild(listItemImg);
    listItemImg.appendChild(img2);
    listItemInf.appendChild(listItemTit)
    
    listItemTit.appendChild(artist_text);
    listItemTit.appendChild(track_text);
    
    listItem.classList.add('item');
    listItemSong.classList.add('song-4');
    listItemInf.classList.add('info');
    img2.classList.add('img')
    listItemTit.classList.add('titles')
    listItem.dataset.index = x;
    
    document.getElementById('list').appendChild(listItem);
  }

  displayTrack(0);
     
  var listItems = document.querySelectorAll('.item');
  listItems.forEach(el => {
    el.onclick = () => {
      displayTrack(el.dataset.index);
      console.log("click!")
    };
  });
  function displayTrack(x) {
    var active = document.querySelector('.is-active');
    if (active) {
      active.classList.remove('is-active'); 
    }
    var el = document.getElementById('list').children[x];
    el.classList.add('is-active');
    var s = src[x],
        artist = s[0],
        track = s[1],
        audio = s[2],
        image = s[3],
        number = parseInt(x) + 1;
    // document.getElementById('title').innerText = number + ": " + artist;
    // document.getElementById('song_title').innerText = track;
    var albumArt = document.getElementById('art');
    // albumArt.src = img;
    // albumArt.alt = artist + " " + track;
    document.getElementById('audio').src = audio; 
    var matches = document.querySelector("#fone");
    matches.style.background = `url(${image})`;
    // console.log(matches.style.background)
    // music.play()
    // pauseSong()
    music.pause()
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
  }
  let isPlaying = false;
  function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    console.log (isPlaying)
    // displayTrack(0);
    music.play()
}
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  // displayTrack(0);
  music.pause()
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
let songIndex = 0;
//prev song
 function prevSong() {
     songIndex--;
     if (songIndex < 0) {
         songIndex = src.length - 1;
     }
     console.log(songIndex)
     console.log("click oo!")
    //  loadSong(src[songIndex]);
     displayTrack(songIndex);
     playSong();
 }
//next song

function nextSong() {
    songIndex++;
    if (songIndex > src.length - 1) {
        songIndex = 0;
    }
    //console.log(songIndex)
    console.log("click oo2!")
    // loadSong(src[songIndex]);
    displayTrack(songIndex);
    playSong();

}
 // Выбор пестни
//  loadSong(src[songIndex]);
function updateProgressBar(e) {
  if (isPlaying) {
     const { duration, currentTime } = e.srcElement;
      
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;

      const durationMinutes = Math.floor(duration / 60);
      // console.log ('minut: ', progress.style.width);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
          durationSeconds = `0${durationSeconds}`;
      }
     //  console.log('second: ', durationSeconds);
      
      if (durationSeconds) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`; 
      }
     //ddD
     const currentMinutes = Math.floor(currentTime / 60);
     // console.log ('minut: ', currentMinutes);
     let currentSeconds = Math.floor(currentTime % 60);
     if (currentSeconds < 10) {
         currentSeconds = `0${currentSeconds}`;
     }
     // console.log('second: ', currentSeconds);
     currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

function setProgressBar(e) {
 // console.log(e)
 const width = this.clientWidth;
 // console.log('width - ', width);
 const clickX = e.offsetX;
 const { duration } = music;
 music.currentTime = (clickX / width) * duration;
}

 prevBtn.addEventListener('click', prevSong);
 nextBtn.addEventListener('click', nextSong);
 music.addEventListener('ended', nextSong);
 music.addEventListener('timeupdate', updateProgressBar);
 progressContainer.addEventListener('click', setProgressBar);
//  const volume = document.querySelector(".material-icons");
//  volume.addEventListener("change", () => {
//    audio.volume = volume.value / 100;
//  });
})