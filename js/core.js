// {/* <script>
// // Get the video
// var video = document.getElementById("myVideo");

// // Get the button
// var btn = document.getElementById("myBtn");

// // Pause and play the video, and change the button text
// function myFunction() {
//     if (video.paused) {
//         video.play();
//         btn.innerHTML = "Pause";
//     } else {
//         video.pause();
//         btn.innerHTML = "Play";
//     }
// }
// </script> */}
const images = document.querySelectorAll('.main_img');


window.addEventListener('scroll', () => {
    images.style.right = "-" + (window.scrollX / 1.5) + "px";
})
