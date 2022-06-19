document.addEventListener('DOMContentLoaded', () => {

    const src = [
        [
            "Виталий Подземный", "Черная Волга", "https://drive.google.com/uc?export=download&id=11lr_5AS2CW-Sc5GNuV1dyXlmgBNyGeKG",
            "https://sun9-west.userapi.com/sun9-54/s/v1/if2/Kas3ZayJT1cUz0XqcTgruytNGALR64AAD2559vtgUao9BdO8Nqr20sbvjoLgv3hRswfnR_GtbpzFkZlkfpxdCGbt.jpg?size=2560x1824&quality=96&type=album"
          ],
    
          [
            "Виталий Подземный", "Оркестр", "https://drive.google.com/uc?export=download&id=18qiNsOlitUBshi44eTwBZ_bDFsrmZ633",
            "https://sun9-west.userapi.com/sun9-54/s/v1/if2/Kas3ZayJT1cUz0XqcTgruytNGALR64AAD2559vtgUao9BdO8Nqr20sbvjoLgv3hRswfnR_GtbpzFkZlkfpxdCGbt.jpg?size=2560x1824&quality=96&type=album"
          ],
          [
            "Artyom Smallkid", "Рай в шалаше", 
            "https://drive.google.com/uc?export=download&id=1iQFYzTT8z19bNpdivUxSGl6fE_vZoLYA",
            "https://sun9-east.userapi.com/sun9-20/s/v1/if1/RV3MYsymr16997zW5iqpXpkkJxQJaY0CRLb4djtWShX7bCRdQu96JMvpvbhNnAoy472sUg.jpg?size=2560x1696&quality=96&type=album"
          ],
          [
            "Жанат Акбулатов", "Скажи", "https://drive.google.com/uc?export=download&id=1ducPiuhjzibvTfxErHMRWAWMU1npHUFZ",
             "https://sun9-east.userapi.com/sun9-59/s/v1/if2/E8Tp_8c2ohYFCLtAirJe1uc7k5BTFyrfPSoAIbRX3gTb4nwn2Qr8S9oxga2QdgXeHQc5gjTgiMTofqK1rr120_iy.jpg?size=400x400&quality=95&type=album"
          ],
          [
            "Николай Зайцев", "Орбит без сахара", "https://drive.google.com/uc?export=download&id=1YvtHEmybr2Iq7zBiNppGxQEeM0wFGswE",
             "https://sun9-east.userapi.com/sun9-43/s/v1/if1/GwmwD98zYDjdBR55XFk9qmXZH6yiSpLY7E7vghBa738yPxmDQOVxgk9sGHcpAoQvCXTIkTM8.jpg?size=1620x2160&quality=96&type=album"
          ],
    
    ];

    const music = document.getElementById('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const image = document.querySelector('img')
const title = document.getElementById('title')
// const artist = document.getElementById('artist')

// проверка play
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    console.log (isPlaying)
    displayTrack(0);
}
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    displayTrack(0);
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));


// function loadSong(song) {
//     title.textContent = song.displayName;
//     artist.textContent = song.artist;
//     music.src = `music/${song.displayName}.mp3`;
//     image.src = `img/${song.name}.jpg`;
// }

for (x = 0; x < src.length; x++) {
    var s = src[x];
    var number = parseInt(x) + 1;
    var artist = document.createTextNode(s[0]);
    var track_name = document.createTextNode(s[1]);
    
    var listItem = document.createElement('div');
    var listItemSong = document.createElement('div');
    var listItemInf = document.createElement("div");
    var listItemTit= document.createElement("div");
    // var listItemImg = document.createElement('div');
    var artist_text = document.createElement('h5');
    var track_text = document.createElement('p');
    //    
    // listItemInf.classList.add('info');
    // listItem.appendChild(listItemInf);
    
    artist_text.appendChild(artist);
    track_text.appendChild(track_name);
    listItem.appendChild(listItemSong);
    listItemSong.appendChild(listItemInf);
    listItemInf.appendChild(listItemTit)
    listItemTit.appendChild(artist_text);
    listItemTit.appendChild(track_text);
    
    listItem.classList.add('item');
    listItemSong.classList.add('song-4');
    listItemInf.classList.add('info');
    listItemTit.classList.add('titles')
    // listItemImg.classList.add('img fourth');
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
        img = s[3],
        number = parseInt(x) + 1;
    // document.getElementById('title').innerText = number + ": " + artist;
    // document.getElementById('song_title').innerText = track;
    var albumArt = document.getElementById('art');
    // albumArt.src = img;
    // albumArt.alt = artist + " " + track;
    // document.player-ui.style.background.src = url(img);
    // document.getElementById('fone').src = img;
    document.getElementById('audio').src = audio;
    audio.autoplay = true;
    
  }
  function loadSong(song) {
    
    music.src = audio;
   
}
})