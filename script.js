const testimonials = [
  {
    name: "a",
    image: "images/a.png",
	audio: "audio/a.mp3",
  },
  {
    name: "b",
    image: "images/b.png",
	audio: "audio/b.mp3",

  },
  {
    name: "c",
    image: "images/c.png",
	audio: "audio/c.mp3",
  },
  {
    name: "d",
    image: "images/d.png",
	audio: "audio/d.mp3",
  },
  {
    name: "e",
    image: "images/e.png",
	audio: "audio/e.mp3",
  },
  {
    name: "f",
    image: "images/f.png",
	audio: "audio/f.mp3",
  },
  {
    name: "g",
    image: "images/g.png",
	audio: "audio/g.mp3",
  },
  {
    name: "h",
    image: "images/h.png",
	audio: "audio/h.mp3",
  },
  {
    name: "i",
    image: "images/i.png",
	audio: "audio/i.mp3",
  },
  {
    name: "j",
    image: "images/j.png",
	audio: "audio/j.mp3",
  },
  {
    name: "k",
    image: "images/k.png",
	audio: "audio/k.mp3",
  },
  {
    name: "l",
    image: "images/l.png",
	audio: "audio/l.mp3",
  },
  {
    name: "m",
    image: "images/m.png",
	audio: "audio/m.mp3",
  },
  {
    name: "n",
    image: "images/n.png",
	audio: "audio/n.mp3",
  },
  {
    name: "o",
    image: "images/o.png",
	audio: "audio/o.mp3",
  },
  {
    name: "p",
    image: "images/p.png",
	audio: "audio/p.mp3",
  },
  {
    name: "q",
    image: "images/q.png",
	audio: "audio/q.mp3",
  },
  {
    name: "r",
    image: "images/r.png",
	audio: "audio/r.mp3",
  },
  {
    name: "s",
    image: "images/s.png",
	audio: "audio/s.mp3",
  },
  {
    name: "t",
    image: "images/t.png",
	audio: "audio/t.mp3",
  },
  {
    name: "u",
    image: "images/u.png",
	audio: "audio/u.mp3",
  },
  {
    name: "v",
    image: "images/v.png",
	audio: "audio/v.mp3",
  },
  {
    name: "w",
    image: "images/w.png",
	audio: "audio/w.mp3",
  },
  {
    name: "x",
    image: "images/x.png",
	audio: "audio/x.mp3",
  },
  {
    name: "y",
    image: "images/y.png",
	audio: "audio/y.mp3",
  },
  {
    name: "z",
    image: "images/z.png",
	audio: "audio/z.mp3",
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
  icon.src = "images/pause.png";
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