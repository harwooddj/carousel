
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".carousel-track");
const prev = document.getElementById("carousel__button--prev");
const next = document.getElementById("carousel__button--next");
const navDots = Array.from(document.querySelectorAll(".carousel__dot"));
let direction;
let position = 0;
let numDots = navDots.length;

next.addEventListener('click', () => {
    if(direction === 1){
        track.prepend(track.lastElementChild);
        direction = -1;
    };    
    carousel.style.justifyContent = "flex-start";
    track.style.transform = "translateX(-33%)";
    direction = -1;
})

prev.addEventListener('click', () => {
    if(direction === -1){
        track.appendChild(track.firstElementChild);
        direction = 1;
    }
    
    carousel.style.justifyContent = "flex-end";
    track.style.transform = "translateX(33%)";
    direction = 1;
})

track.addEventListener("transitionend", () => {
    navDots[position].classList.remove("current-item");
    if(direction === 1){
        track.prepend(track.lastElementChild);
        if(position === 0){
            position = numDots-1;
        }else{
            position--;
        }
    }else{
        track.appendChild(track.firstElementChild);
        if(position === numDots-1){
            position = 0;
        }else{
            position++;
        }
    }
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    setTimeout(() => {
        track.style.transition = "all 0.5s";
    }, false);
    navDots[position].classList.add("current-item");
})