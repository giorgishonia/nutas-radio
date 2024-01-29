document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById('welcome-screen');
    const musicPlayer = document.getElementById('music-player');

    // After 5 seconds, fade out the welcome screen and lift up the music player
    setTimeout(function () {
        welcomeScreen.classList.add('lift-up');
        musicPlayer.classList.add('lift-up');
    }, 3000);

    // After 3 seconds, add a class to trigger the fade-in animation
    setTimeout(function () {
        musicPlayer.classList.add('fade-in');
    }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const coverImage = document.getElementById("cover-image");
    const songList = document.getElementById("song-list");
    const musicPlayerText = document.querySelector('.music-player p');
    musicPlayerText.classList.add('animate-text');

    const songs = [
        { title: "Let Down", audioSource: "./songs/Radiohead – Let Down.mp3", image: "./covers/karma police.jpg" },
        { title: "Creep", audioSource: "./songs/Radiohead – Creep.mp3", image: "./covers/creep.png" },
        { title: "A Wolf at the Door", audioSource: "./songs/Radiohead – A Wolf At the Door.mp3", image: "./covers/a3503294240_65.jpg" },
        { title: "Knives Out", audioSource: "./songs/Radiohead – Knives Out.mp3", image: "./covers/nutas tavi.png" },
        { title: "You and Whose Army", audioSource: "./songs/Radiohead – You And Whose Army.mp3", image: "./covers/Radioheadamnesiac.webp" },
    ];

    let currentSongIndex = 0;

    function loadSong(index) {
        const currentSong = songs[index];
        audioPlayer.src = currentSong.audioSource;
        audioPlayer.play();
        coverImage.src = currentSong.image;
        coverImage.alt = `Album Cover: ${currentSong.title}`;
        // Update any other relevant information (e.g., song title)
        console.log(`Now playing: ${currentSong.title}`);
    }

    // Add click event listeners to each list item
    songList.addEventListener("click", function (event) {
        const listItem = event.target;
        if (listItem.tagName === "LI") {
            const index = parseInt(listItem.getAttribute("data-index"), 10);
            loadSong(index);
            currentSongIndex = index;
        }
    });

    // Load the initial song
    loadSong(currentSongIndex);

    audioPlayer.addEventListener("ended", function () {
        // Change to the next song when the current song ends
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    });
});
