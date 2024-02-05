let musics = [
  {
    name: "rimix mazandaran",
    image: "./1.jpg",
    music: new Audio("/Amir-Yal-Gole-Man-2-128.mp3"),
  },
  {
    name: "armin 2afm",
    image: "/2.jpg",
    music: new Audio("/Armin Zarei - Shomare Jadidam (128).mp3"),
  },
  {
    name: "behnam bani",
    image: "/3.jpg",
    music: new Audio("/Behnam Bani - Kojaye In Shahri (128).mp3"),
  },
];
let btnpre = document.querySelector(".pre");
let playbtn = document.querySelector(".play");
let nextbtn = document.querySelector(".next");
let image = document.querySelector(".image-music");
let name = document.querySelector(".name-music");
let range = document.querySelector("input");

let index = 0;
image.src = musics[index].image;
name.innerText = musics[index].name;
let ahang = musics[index].music;

ahang.addEventListener("canplay", (e) => {
  range.max = ahang.duration;
});
ahang.addEventListener("timeupdate", () => {
  range.value = ahang.currentTime;
});
range.addEventListener("input", () => {
  ahang.currentTime = range.value;
});
playbtn.addEventListener("click", () => {
  if (ahang.paused) {
    ahang.play();
    document.querySelector(".play").innerHTML = "pause";
    image.style.animationPlayState = "running";
  } else {
    ahang.pause();
    document.querySelector(".play").innerHTML = "play";
    image.style.animationPlayState = "paused";
  }
});

btnpre.addEventListener("click", (e) => {
  changemusic("pre");
});
nextbtn.addEventListener("click", (e) => {
  changemusic("next");
});
function changemusic(state) {
  ahang.pause();
  range.value = 0;
  ahang.currentTime = 0;
  image.style.animationPlayState = "paused";
  if (state == "next") {
    if (index == musics.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
  } else if (state == "pre") {
    if (index == 0) {
      index = musics.length - 1;
    } else {
      index -= 1;
    }
  }
  ahang = musics[index].music;
  image.src = musics[index].image;
  name.innerText = musics[index].name;
  ahang.play()
}
