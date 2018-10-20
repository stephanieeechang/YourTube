var video = document.getElementsByClassName("html5-video-player")[0];
var vidTime = document.getElementById("movie_player");
var vidFrame = document.getElementById("player");

// mirrors the video
function mirroring() {
    video.style.transform = "scalex(-1)";
}

// replays a portion of the video, given start and end time
function replay(start, end) {
    vidTime.seekTo(start);
    while (vidTime.getCurrentTime < end) {
        if (vidTime.getCurrentTime == end ) {
            replay(start, end);
        }
    }
}

// rewinds the video
function rewind() {
    vidTime.seekTo(vidTime.getCurrentTime -= .05);
}

// makes background black when user uses theatre mode
function blackMode() {
    document.body.style.backgroundImage = "url('black.jpg')";
    // document.body.style.background = black;
}