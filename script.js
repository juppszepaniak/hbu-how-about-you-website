/* HAMBURGER MENU */

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* RegEx */

const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

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

const averageMentalHelth = [];

/* SLIDER BY DEFAULT */

const selfAssessmentSlider = document.getElementById("slider-container");

defaultValue =
  selfAssessmentSlider.max < selfAssessmentSlider.min
    ? selfAssessmentSlider.min
    : selfAssessmentSlider.min +
      (selfAssessmentSlider.max - selfAssessmentSlider.min) / 2;

/* SELF ASSESSMENT FUNCTIONS */

const input = document.querySelector("#self-assessment-slider");
const value = document.querySelector("#slider-value");

value.textContent = mentalHealthScale[input.value];
input.addEventListener("input", (event) => {
  value.textContent = mentalHealthScale[event.target.value];
});

/* -------- */

function safeSelfAssessment() {
  const date = new Date().toLocaleDateString("de-DE"); //= "Value" >> {"date: date"}
  const emotion = mentalHealthScale[input.value]; //= "Value" >> {"emotion: emotion"}
  const selfAssessmentId = removeSpecialChars(`${date}`); //= "key" >> selfAssessmentId

  console.log(input.value);

  if (emotion) {
    const selfAssessment = { date, emotion };
    localStorage.setItem(
      `sa-${selfAssessmentId}`,
      JSON.stringify(selfAssessment)
    );
    alert(`Es wurde "${emotion}" für heute, den ${date} gespeichert!`);
  } else {
    alert("Da hat irgendwas nicht geklappt!");
  }
}

/* -------- */

function updateSelfAssessment() {
  const sliderValue = document.getElementById("slider-value"); //innerText
  const allSelfAssessmentsEmotions = [];

  const date = new Date().toLocaleDateString("de-DE");
  const curSelfAssessmentId = removeSpecialChars(`${date}`);

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("sa-")) {
      const selfAssessment = JSON.parse(localStorage.getItem(key));
      const selfAssessmentDate = removeSpecialChars(`${selfAssessment.date}`);
      const selfAssessmentEmotion = selfAssessment.emotion;

      if (selfAssessmentDate === curSelfAssessmentId) {
        allSelfAssessmentsEmotions.push(selfAssessmentEmotion);
      } else {
        allSelfAssessmentsEmotions.unshift(selfAssessmentEmotion);
      }
    }
  }

  const latestEmotion =
    allSelfAssessmentsEmotions[allSelfAssessmentsEmotions.length - 1];

  if (document.getElementById("slider-value")) {
    sliderValue.innerText = latestEmotion;
    let latestEmotionIndex = 4;

    if (latestEmotion === "hoffnungslos") {
      latestEmotionIndex = 0;
    } else if (latestEmotion === "antriebslos") {
      latestEmotionIndex = 1;
    } else if (latestEmotion === "traurig") {
      latestEmotionIndex = 2;
    } else if (latestEmotion === "unzufrieden") {
      latestEmotionIndex = 3;
    } else if (latestEmotion === "neutral") {
      latestEmotionIndex = 4;
    } else if (latestEmotion === "zufrieden") {
      latestEmotionIndex = 5;
    } else if (latestEmotion === "optimistisch") {
      latestEmotionIndex = 6;
    } else if (latestEmotion === "glücklich") {
      latestEmotionIndex = 7;
    } else if (latestEmotion === "euphorisch") {
      latestEmotionIndex = 8;
    }
    document.getElementById("self-assessment-slider").value = latestEmotionIndex;
  }
}
window.addEventListener("DOMContentLoaded", updateSelfAssessment);
