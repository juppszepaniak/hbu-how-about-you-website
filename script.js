/* HAMBURGER MENU */

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* SELBSTEINSCHÄTZUNG */

const mentalHealthScale = [
  "hoffnungslos",
  "antriebslos",
  "traurig",
  "unzufrieden",
  "neutral",
  "zufrieden",
  "optimistisch",
  "glücklich",
  "euphorisch",
];

const selfAssessmentSlider = document.getElementById("self-assessment-slider");

defaultValue =
  selfAssessmentSlider.max < selfAssessmentSlider.min
    ? selfAssessmentSlider.min
    : selfAssessmentSlider.min +
      (selfAssessmentSlider.max - selfAssessmentSlider.min) / 2;

const input = document.querySelector("#self-assessment");
const value = document.querySelector("#value");
const mentaleState = mentalHealthScale[input.value];

console.log(mentaleState);

value.textContent = mentalHealthScale[input.value];
input.addEventListener("input", (event) => {
  value.textContent = mentalHealthScale[event.target.value];
});

function safeSelfAssessment() {}
