const music = document.querySelector("audio");
const img = document.querySelector("img")
const play = document.getElementById("play");
const names = document.getElementById("name");
const details = document.getElementById("details");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let pro = document.getElementById("pro");
let time = document.getElementById("time");
let timeing = document.getElementById("timeing");
const progress = document.getElementById("progress");

const SongList = [
{
    Title : "song-1",
    name : "YEH RAATEN YEH MAUSAM",
    detail : "Sanam"
},
{
    Title : "song-2",
    name : " O Mere Dil Ke Chain",
    detail : "Sanam"
},
{
    Title : "song-3",
    name : "Mere Sapnon Ki Rani Kab Aayege",
    detail : "Sanam"
}
];

let isPlaying = false;

const playMusic = ()  =>{
isPlaying = true;
music.play();
play.classList.replace("fa-play", "fa-pause");
img.classList.add("animations");
};

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("animations");
    };

play.addEventListener('click', () =>{
      isPlaying ? pauseMusic() : playMusic();
    });

const loadSong = (SongList) => {
names.textContent = SongList.name;
details.textContent = SongList.detail;
music.src = "Music/" + SongList.Title + ".mp3";
img.src = "Images/" + SongList.Title + ".jpg";
};
// loadSong(SongList[2]);
songIndex = 0;
const nextSong = () => {
songIndex = (songIndex + 1) % SongList.length;
loadSong(SongList[songIndex]);
playMusic();
};
next.addEventListener('click', nextSong);
const previousSong = () => {
    songIndex = (songIndex - 1 + SongList.length) % SongList.length;
    loadSong(SongList[songIndex]);
    playMusic();
    };
previous.addEventListener('click', previousSong);

music.addEventListener('timeupdate', (event ) =>{
const {currentTime, duration} = event.srcElement;
let progresstime = (currentTime / duration) * 100;
pro.style.width = `${progresstime}%`;
let minduration = Math.floor(duration / 60);
let secduration =  Math.floor(duration % 60);
let totaltime = `${minduration}:${secduration}`;
if(duration){
    timeing.textContent = `${totaltime}`;
}
let mincurrentTime = Math.floor(currentTime / 60);
let seccurrentTime =  Math.floor(currentTime % 60);
if(seccurrentTime < 10){
    seccurrentTime = `0${seccurrentTime}`;
    let currentTimes = `${mincurrentTime}:${seccurrentTime}`;
    time.textContent = `${currentTimes}`;
}
let currentTimes = `${mincurrentTime}:${seccurrentTime}`;
time.textContent = `${currentTimes}`;
});
progress.addEventListener('click', (event) => {
    const {duration} = music;
let currentprogress = (event.offsetX / event.srcElement.clientWidth) * duration;
music.currentTime = currentprogress;
});

function playAudio() { 
 music.play(); 
} 

function pauseAudio() {
music.pause();
}

