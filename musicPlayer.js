var playlist = [
  "Audio/Vol1.mp3",
    "Audio/NothinOnMe.mp3",
    "Audio/Snowman.mp3",
    "Audio/AThousandYears.mp3",
    "Audio/GoldenHour.mp3",
    "Audio/Perfect.mp3",
    "Audio/Symphony.mp3"
]
var currentTrack = 0;
var sound = new Howl({
    src: [playlist[currentTrack]],
    onend: playNextTrack
  });

  function playNextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    sound = new Howl({
      src: [playlist[currentTrack]],
      onend: playNextTrack
    });
    sound.volume(0.1);
    sound.play();
  }
  function playMusic()
  {
    sound.volume(0.1);
    sound.play();
  }
  