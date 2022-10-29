const BIG = "big";
const MIDDLE = "middle";
const SMALL = "small";

const bgColor = document.body;

function handleWindowResize() {
  const frameWidth = window.innerWidth;
  
  if (frameWidth > 1180) {
    bgColor.classList.remove(MIDDLE);
    bgColor.classList.add(BIG);
  } else if (frameWidth <= 1280 && frameWidth > 650) {
    bgColor.classList.remove(BIG, SMALL);
    bgColor.classList.add(MIDDLE);
  } else {
    bgColor.classList.remove(MIDDLE);
    bgColor.classList.add(SMALL);
  }
}

window.addEventListener("resize", handleWindowResize);