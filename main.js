function createDigits(strip, max = 9) {
  const digitsWrapper = document.createElement("div");
  digitsWrapper.classList.add("digits");

  for (let i = 0; i <= max; i++) {
    const div = document.createElement("div");
    div.classList.add("digit");
    div.innerText = i;
    digitsWrapper.appendChild(div);
  }

  strip.appendChild(digitsWrapper);
  return digitsWrapper;
}

const h1Strip = document.getElementById("h1");
const h2Strip = document.getElementById("h2");
const m1Strip = document.getElementById("m1");
const m2Strip = document.getElementById("m2");
const s1Strip = document.getElementById("s1");
const s2Strip = document.getElementById("s2");

const h1Digits = createDigits(h1Strip, 2);
const h2Digits = createDigits(h2Strip, 9);
const m1Digits = createDigits(m1Strip, 5);
const m2Digits = createDigits(m2Strip, 9);
const s1Digits = createDigits(s1Strip, 5);
const s2Digits = createDigits(s2Strip, 9);

function updateStrip(wrapper, value) {
  wrapper.style.transform = `translateY(-${value * 8}vmin)`;
  [...wrapper.children].forEach((d, i) => {
    d.classList.toggle("active", i === value);
  });
}

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  updateStrip(h1Digits, Math.floor(h / 10));
  updateStrip(h2Digits, h % 10);
  updateStrip(m1Digits, Math.floor(m / 10));
  updateStrip(m2Digits, m % 10);
  updateStrip(s1Digits, Math.floor(s / 10));
  updateStrip(s2Digits, s % 10);
}

setInterval(updateClock, 1000);
updateClock();
