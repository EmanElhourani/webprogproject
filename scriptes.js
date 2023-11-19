const testimonials = [
  {
    name: "a",
    image: "images/a.png",
	audio: "audio/a.es.mp3",
  },
  {
    name: "b",
    image: "images/b.png",
	audio: "audio/b.es.mp3",

  },
  {
    name: "c",
    image: "images/c.png",
	audio: "audio/c.es.mp3",
  },
  {
    name: "d",
    image: "images/d.png",
	audio: "audio/d.es.mp3",
  },
  {
    name: "e",
    image: "images/e.png",
	audio: "audio/e.es.mp3",
  },
  {
    name: "f",
    image: "images/f.png",
	audio: "audio/f.es.mp3",
  },
  {
    name: "g",
    image: "images/g.png",
	audio: "audio/g.es.mp3",
  },
  {
    name: "h",
    image: "images/h.png",
	audio: "audio/h.es.mp3",
  },
  {
    name: "i",
    image: "images/i.png",
	audio: "audio/i.es.mp3",
  },
  {
    name: "j",
    image: "images/j.png",
	audio: "audio/j.es.mp3",
  },
  {
    name: "k",
    image: "images/k.png",
	audio: "audio/k.es.mp3",
  },
  {
    name: "l",
    image: "images/l.png",
	audio: "audio/l.es.mp3",
  },
  {
    name: "m",
    image: "images/m.png",
	audio: "audio/m.es.mp3",
  },
  {
    name: "n",
    image: "images/n.png",
	audio: "audio/n.es.mp3",
  },
  {
    name: "n",
    image: "images/n.es.png",
	audio: "audio/na.es.mp3",
  },
  {
    name: "o",
    image: "images/o.png",
	audio: "audio/o.es.mp3",
  },
  {
    name: "p",
    image: "images/p.png",
	audio: "audio/p.es.mp3",
  },
  {
    name: "q",
    image: "images/q.png",
	audio: "audio/q.es.mp3",
  },
  {
    name: "r",
    image: "images/r.png",
	audio: "audio/r.es.mp3",
  },
  {
    name: "s",
    image: "images/s.png",
	audio: "audio/s.es.mp3",
  },
  {
    name: "t",
    image: "images/t.png",
	audio: "audio/t.es.mp3",
  },
  {
    name: "u",
    image: "images/u.png",
	audio: "audio/u.es.mp3",
  },
  {
    name: "v",
    image: "images/v.png",
	audio: "audio/v.es.mp3",
  },
  {
    name: "w",
    image: "images/w.png",
	audio: "audio/w.es.mp3",
  },
  {
    name: "x",
    image: "images/x.png",
	audio: "audio/x.es.mp3",
  },
  {
    name: "y",
    image: "images/y.png",
	audio: "audio/y.es.mp3",
  },
  {
    name: "z",
    image: "images/z.png",
	audio: "audio/z.es.mp3",
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