/* Switch Button Handler */
let switchBtn = $("#switch-btn");

let nightState = true;
function changeTime(nightState) {
  if (nightState) {
    $(".switch-inner img").attr("src", "./assets/icon/night.svg");
    switchBtn.css("backgroundColor", "hsla(0, 0%, 100%, 0.25)");
    $(".night-video").css("opacity", 1);
    $(".day-video").css("opacity", 0);
    $("header").css("background-image", "none");
  } else {
    $(".switch-inner img").attr("src", "./assets/icon/day.svg");
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

/* Music Player Handler */-
$.getJSON("/songData.json", (data) => {
  let songList = data;
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
      playStopBtn.attr("src", "./assets/icon/play.svg");
      audio[0].play();
    } else {
      playStopBtn.attr("src", "./assets/icon/stop.svg");
      audio[0].pause();
    }
  }

  function changeSong(id) {
    playState = true;
    playStopBtn.attr("src", "./assets/icon/play.svg");
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
});
