const testimonials = [
  {
    name: "ا",
    image: "images/ا.png",
	audio: "audio/ا.mp3",
  },
  {
    name: "ب",
    image: "images/ب.png",
	audio: "audio/ب.mp3",

  },
  {
    name: "ت",
    image: "images/ت.png",
	audio: "audio/ت.mp3",
  },
  {
    name: "ث",
    image: "images/ث.png",
	audio: "audio/ث.mp3",
  },
  {
    name: "ج",
    image: "images/ج.png",
	audio: "audio/ج.mp3",
  },
  {
    name: "ح",
    image: "images/ح.png",
	audio: "audio/ح.mp3",
  },
  {
    name: "خ",
    image: "images/خ.png",
	audio: "audio/خ.mp3",
  },
  {
    name: "د",
    image: "images/د.png",
	audio: "audio/د.mp3",
  },
  {
    name: "ذ",
    image: "images/ذ.png",
	audio: "audio/ذ.mp3",
  },
  {
    name: "ر",
    image: "images/ر.png",
	audio: "audio/ر.mp3",
  },
  {
    name: "ز",
    image: "images/ز.png",
	audio: "audio/ز.mp3",
  },
  {
    name: "س",
    image: "images/س.png",
	audio: "audio/س.mp3",
  },
  {
    name: "ش",
    image: "images/ش.png",
	audio: "audio/ش.mp3",
  },
  {
    name: "ص",
    image: "images/ص.png",
	audio: "audio/ص.mp3",
  },
  {
    name: "ض",
    image: "images/ض.png",
	audio: "audio/ض.mp3",
  },
  {
    name: "ط",
    image: "images/ط.png",
	audio: "audio/ط.mp3",
  },
  {
    name: "ظ",
    image: "images/ظ.png",
	audio: "audio/ظ.mp3",
  },
  {
    name: "ع",
    image: "images/ع.png",
	audio: "audio/ع.mp3",
  },
  {
    name: "غ",
    image: "images/غ.png",
	audio: "audio/غ.mp3",
  },
  {
    name: "ف",
    image: "images/ف.png",
	audio: "audio/ف.mp3",
  },
  {
    name: "ق",
    image: "images/ق.png",
	audio: "audio/ق.mp3",
  },
  {
    name: "ك",
    image: "images/ك.png",
	audio: "audio/ك.mp3",
  },
  {
    name: "ل",
    image: "images/ل.png",
	audio: "audio/ل.mp3",
  },
  {
    name: "م",
    image: "images/م.png",
	audio: "audio/م.mp3",
  },
  {
    name: "ن",
    image: "images/ن.png",
	audio: "audio/ن.mp3",
  },
  {
    name: "ه",
    image: "images/ه.png",
	audio: "audio/ه.mp3",
  },
  {
    name: "و",
    image: "images/و.png",
	audio: "audio/و.mp3",
  },
  {
    name: "ي",
    image: "images/ي.png",
	audio: "audio/ي.mp3",
  },
];

let i = 0; // current slide
let j = testimonials.length;

let testimonialsContainer = document.getElementById("testimanial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let audio = document.getElementById("audio");
let icon = document.getElementById("icon");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialsContainer.innerHTML = `<img src="${testimonials[i].image}" alt="${testimonials[i].name}">`;
  audio.src = testimonials[i].audio;
  // Play the audio automatically when switching testimonials
  audio.play();
  icon.src = "images/play.png";
};

icon.onclick = function () {
  if (audio.paused) {
    audio.play();
    icon.src = "images/pause.png";
  } else {
    audio.pause();
    icon.src = "images/play.png";
  }
};

window.onload = displayTestimonial;