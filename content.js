var video = document.getElementsByClassName("html5-video-player ytp-transparent ytp-hide-info-bar ad-created iv-module-loaded paused-mode ytp-large-width-mode")[0];

// mirrors the video
function mirroring() {
    video.style.transform = "scaleX(-1)";
}

// replays a portion of the video, given start and end time
function replay(start, end) {
    video.currentTime = start;
    while (video.currentTime < end) {
        if (video.currentTime == end) {
            replay(start, end);
        }
    }
}


// rewinds the video
funciton rewind() {
    video.currentTime -= .05;
}