import "normalize.css";
import "./style.scss";

const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbar");
const close = document.querySelector(".close");

if (bar) {
  bar.addEventListener("click", () => {
    // console.log("click");
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const mainImg = document.querySelector(".mainImg");
const smallImg = document.querySelector(".small-img");

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};
