/* Switch Button Handler */
let switchBtn = $("#switch-btn");

let nightState = true;
function changeTime(nightState) {
  if (nightState) {
    $(".switch-inner img").attr("src", "static/assets/icon/night.svg");
    switchBtn.css("backgroundColor", "hsla(0, 0%, 100%, 0.25)");
    $(".night-video").css("opacity", 1);
    $(".day-video").css("opacity", 0);
    $("header").css("background-image", "none");
  } else {
    $(".switch-inner img").attr("src", "static/assets/icon/day.svg");
    switchBtn.css("backgroundColor", "#f3a952");
    $(".night-video").css("opacity", 0);
    $(".day-video").css("opacity", 1);
    $("header").css(
      "background-image",
      "linear-gradient(180deg, rgba(66, 65, 65, 0.6), transparent)"
    );
  }
}

switchBtn.click(() => {
  if (nightState) {
    switchBtn[0].insertBefore($(".switch-inner")[0], $(".switch-handler")[0]);
    changeTime((nightState = false));
  } else {
    switchBtn[0].insertBefore($(".switch-handler")[0], $(".switch-inner")[0]);
    changeTime((nightState = true));
  }
});

let signUpBtn = document.querySelector(".login-btn");
let shareBtn = document.getElementsByClassName("fa-share")[0];

/* Set Full Screen*/
let fullscreen = false;
$(".fa-expand").click(() => {
  if (!fullscreen) {
    document.documentElement.requestFullscreen();
    fullscreen = true;
  } else {
    document.exitFullscreen();
    fullscreen = false;
  }
});

let menuBtn = document.getElementsByClassName("fa-bars")[0];

signUpBtn.onclick = () => {
  alert("signUpBtn is clicked");
};

shareBtn.onclick = () => {
  alert("shareBtn is clicked");
};

menuBtn.onclick = () => {
  alert("menuBtn is clicked");
};

/* Music Player Handler */
let songList = [
  {
    id: "0",
    name: "Kiki's Delivery Service - Umi No Mieru Machi",
    src: "static/assets/music/0. Kiki's Delivery Service - Umi No Mieru Machi.mp3",
  },
  {
    id: "1",
    name: "Princess Mononoke - Mononoke Hime",
    src: "static/assets/music/1. Princess Mononoke - Mononoke Hime.mp3",
  },
  {
    id: "2",
    name: "My Neighbor Totoro - Kaze no Toori Michi",
    src: "static/assets/music/2. My Neighbor Totoro - Kaze no Toori Michi.mp3",
  },
  {
    id: "3",
    name: "Porco Rosso - Toki ni wa Mukashi no Hanashi wo",
    src: "static/assets/music/3. Porco Rosso - Toki ni wa Mukashi no Hanashi wo.mp3",
  },
  {
    id: "4",
    name: "Kiki's Delivery Service - Yasashisa ni Tsutsumareta nara",
    src: "static/assets/music/4. Kiki's Delivery Service - Yasashisa ni Tsutsumareta nara.mp3",
  },
  {
    id: "5",
    name: "My Neighbor Totoro - Tonari no Totoro",
    src: "static/assets/music/5. My Neighbor Totoro - Tonari no Totoro.mp3",
  },
  {
    id: "6",
    name: "Nausicaä of the Valley of the Wind - Kaze no Tani no Naushika",
    src: "static/assets/music/6. Nausicaä of the Valley of the Wind - Kaze no Tani no Naushika.mp3",
  },
  {
    id: "7",
    name: "Laputa Castle in the Sky - Kimi wo Nosete",
    src: "static/assets/music/7. Laputa Castle in the Sky - Kimi wo Nosete.mp3",
  },
  {
    id: "8",
    name: "Spirited Away - Inochi no Namae",
    src: "static/assets/music/8. Spirited Away - Inochi no Namae.mp3",
  },
  {
    id: "9",
    name: "From Up on Poppy Hill - Sayonara no Natsu",
    src: "static/assets/music/9. From Up on Poppy Hill - Sayonara no Natsu.mp3",
  },
  {
    id: "10",
    name: "Whisper of the Heart - Take Me Home",
    src: "static/assets/music/10. Whisper of the Heart - Take Me Home.mp3",
  },
  {
    id: "11",
    name: "Kiki's Delivery Service - Message By Rouge",
    src: "static/assets/music/11. Kiki's Delivery Service - Message By Rouge.mp3",
  },
  {
    id: "12",
    name: "My Neighbor Totoro - Stroll",
    src: "static/assets/music/12. My Neighbor Totoro - Stroll.mp3",
  },
  {
    id: "13",
    name: "Tales from Earthsea - Teru's Song",
    src: "static/assets/music/13. Tales from Earthsea - Teru's Song.mp3",
  },
  {
    id: "14",
    name: "The Secret World of Arrietty - Arrietty's Song",
    src: "static/assets/music/14. The Secret World of Arrietty - Arrietty's Song.mp3",
  },
  {
    id: "15",
    name: "Ponyo - Ponyo on the Cliff by the Sea",
    src: "static/assets/music/15. Ponyo - Ponyo on the Cliff by the Sea.mp3",
  },
  {
    id: "16",
    name: "Nausicaä of the Valley of the Wind - Nausicaa Requiem",
    src: "static/assets/music/16. Nausicaä of the Valley of the Wind - Nausicaa Requiem.mp3",
  },
  {
    id: "17",
    name: "Howl's Moving Castle - The Promise of the World",
    src: "static/assets/music/17. Howl's Moving Castle - The Promise of the World.mp3",
  },
];

let numberOfSong = songList.length;

let audio = $("audio");
let playStopBtn = $(".play_stop-btn");
let nextBtn = $(".next-btn");
let prevBtn = $(".prev-btn");

let playState = false;
let currentId = 0;
let nameSong = $(".name-song");

function changePlayStopState(playState) {
  if (playState) {
    playStopBtn.attr("src", "static/assets/icon/play.svg");
    audio[0].play();
  } else {
    playStopBtn.attr("src", "static/assets/icon/stop.svg");
    audio[0].pause();
  }
}

function changeSong(id) {
  playState = true;
  playStopBtn.attr("src", "static/assets/icon/play.svg");
  audio.attr("src", songList[id].src);
  audio.attr("autoplay", true);
  nameSong.text("Song name: " + songList[id].name);
}

playStopBtn.click(() => {
  if (playState) changePlayStopState((playState = false));
  else changePlayStopState((playState = true));
});

nextBtn.click(() => {
  currentId++;
  if (currentId == numberOfSong) currentId = 0;
  changeSong(currentId);
});

prevBtn.click(() => {
  currentId--;
  if (currentId == -1) currentId = numberOfSong - 1;
  changeSong(currentId);
});
