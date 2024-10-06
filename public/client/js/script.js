var sound = new Howl({
  src: [
    "https://res.cloudinary.com/dswmkjagw/video/upload/v1728197121/chung-ta-cua-tuong-lai-son-tung-mtp_eea1jc.mp3",
  ],
  volume: 0.5,
  loop: false,
});

let isRepeating = false;

const playPauseButton = document.getElementById("play-pause");
const volumeSlider = document.querySelector(".volume-slider");
const progressBar = document.getElementById("play-progress");
const repeatButton = document.getElementById("repeat");

playPauseButton.addEventListener("click", togglePlayPause);
volumeSlider.addEventListener("input", function () {
  var volume = this.value / 100;
  sound.volume(volume);
});

setInterval(function () {
  if (sound.playing()) {
    var seek = sound.seek() || 0;
    var progress = (seek / sound.duration()) * 100;
    progressBar.value = progress;
  }
}, 1000);

progressBar.addEventListener("input", function () {
  var seekTime = (this.value / 100) * sound.duration();
  sound.seek(seekTime);
});

function togglePlayPause() {
  if (sound.playing()) {
    sound.pause();
    playPauseButton.innerHTML =
      '<i class="fa fa-play fa-solid text-black text-xl bg-white p-2 rounded-full cursor-pointer text-center"></i>';
  } else {
    sound.play();
    playPauseButton.innerHTML =
      '<i class="fa fa-pause fa-solid text-black text-xl bg-white p-2 px-3 rounded-full cursor-pointer text-center"></i>';
  }
}

sound.on("end", function () {
  playPauseButton.innerHTML =
    '<i class="fa fa-play fa-solid text-black text-xl bg-white p-2 rounded-full cursor-pointer text-center"></i>';
});

repeatButton.addEventListener("click", function () {
  isRepeating = !isRepeating;
  this.classList.toggle("active", isRepeating);
});

const btnPlay = document.getElementById("play-button");
if (btnPlay) {
  btnPlay.addEventListener("click", function () {
    if (sound.playing()) {
      sound.stop();
    }

    sound = new Howl({
      src: ["https://res.cloudinary.com/dswmkjagw/video/upload/v1728197121/chung-ta-cua-tuong-lai-son-tung-mtp_eea1jc.mp3"],
      volume: 0.5,
      loop: false,
    });

    sound.play();

    const playButton = document.getElementById("play-button");
    playButton.innerHTML =
      '<i class="fa fa-pause fa-solid" style="color: #ffffff;"></i>';

    sound.on("end", function () {
      playButton.innerHTML =
        '<i class="fa fa-play fa-solid" style="color: #ffffff;"></i>';
    });
  });
}