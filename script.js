VANTA.NET({
  el: "#net",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x3e331,
  color: 0xeeeee,
  backgroundColor: 0x112,
});
//selecting elements
const counter = document.querySelector(".counter");
const advices = document.querySelector(".advice");
const btn = document.querySelector(".btn");
let count = 0;

//getting advice
const getAdvice = async function () {
  try {
    const req = await fetch("https://api.adviceslip.com/advice");
    if (!req.ok) {
      throw new Error("No advices for Today 😢");
    }
    const data = await req.json();
    const advice = data.slip.advice;
    if (advices.textContent !== advice) {
      count += 1;
      advices.textContent = advice;
      counter.textContent = count;
    }
  } catch (err) {
    alert(err);
  }
};

btn.addEventListener("click", function () {
  getAdvice();
});
