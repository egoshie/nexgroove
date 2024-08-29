document.addEventListener('DOMContentLoaded', function() {
    const songData = {
        song: "NexGroove",
        artist: "Ege",
        albumArt: "./images/nexgroove.jpg"
    };

    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const albumArt = document.getElementById('album-art');

    songTitle.textContent = songData.song;
    artistName.textContent = songData.artist;
    albumArt.src = songData.albumArt;
});
