function searchMusic() {

var songTitleInput = document.getElementById("song-title").value;
var songArtistInput = document.getElementById("song-artist").value;

if (songTitleInput.toLowerCase() == "horses") {

    document.getElementById("horses-keith-urban").style.display = "block";
    
} else if (songTitleInput.toLowerCase() == "you shook me all night long" || songArtistInput.toLowerCase() == "acdc") {

    document.getElementById("you-shook-me-all-night-long-acdc").style.display = "flex";
}else if (songTitleInput.toLowerCase() == "this is us" || songArtistInput.toLowerCase() == "jimmie allen") {

    document.getElementById("this-is-us-jimmie-allen").style.display = "block";
} else if (songArtistInput.toLowerCase() == "keith urban") {

    document.getElementById("horses-keith-urban").style.display = "block";
    document.getElementById("love-the-way-it-hurts-keith-urban").style.display = "block";
    document.getElementById("wasted-time-keith-urban").style.display = "block";
    document.getElementById("somewhere-in-my-car-keith-urban").style.display = "block";
    document.getElementById("never-coming-down-keith-urban").style.display = "block";
} else {

    alert("No songs match that.");
}
}