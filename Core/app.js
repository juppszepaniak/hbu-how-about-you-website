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
  "antriebslos",
  "traurig",
  "unzufrieden",
  "fragwürdig",
  "neutral",
  "zufrieden",
  "optimistisch",
  "glücklich",
  "euphorisch",
];

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
    updateAverageOnDashboard();
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

    if (latestEmotion === "antriebslos") {
      latestEmotionIndex = 0;
    } else if (latestEmotion === "traurig") {
      latestEmotionIndex = 1;
    } else if (latestEmotion === "unzufrieden") {
      latestEmotionIndex = 2;
    } else if (latestEmotion === "fragwürdig") {
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
    document.getElementById("self-assessment-slider").value =
      latestEmotionIndex;
  }
}
window.addEventListener("DOMContentLoaded", updateSelfAssessment);

/* -------- */

function updateAverageOnDashboard() {
  const enteredEmotionsIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let sum = 0;
  let countedEntries = 0;
  let highestValue = 0;

  const averageMentalHelthValue = document.getElementById("average-emotion");
  const selectedMentalHelthValue = document.getElementById("most-selected-emotion");
  const date = new Date().toLocaleDateString("de-DE");
  const curId = removeSpecialChars(`${date}`);

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("sa-")) {
      const allSaIds = JSON.parse(localStorage.getItem(key));
      const selfAssessmentDate = removeSpecialChars(`${allSaIds.date}`);
      const selfAssessmentEmotion = allSaIds.emotion;

      console.log(allSaIds);

      if (selfAssessmentEmotion === "antriebslos") {
        enteredEmotionsIndex[0]++;
        sum += 1*1;
      } else if (selfAssessmentEmotion === "traurig") {
        enteredEmotionsIndex[1]++;
        sum += 1*2;
      } else if (selfAssessmentEmotion === "unzufrieden") {
        enteredEmotionsIndex[2]++;
        sum += 1*3;
      } else if (selfAssessmentEmotion === "fragwürdig") {
        enteredEmotionsIndex[3]++;
        sum += 1*4;
      } else if (selfAssessmentEmotion === "neutral") {
        enteredEmotionsIndex[4]++;
        sum += 1*5;
      } else if (selfAssessmentEmotion === "zufrieden") {
        enteredEmotionsIndex[5]++;
        sum += 1*6;
      } else if (selfAssessmentEmotion === "optimistisch") {
        enteredEmotionsIndex[6]++;
        sum += 1*7;
      } else if (selfAssessmentEmotion === "glücklich") {
        enteredEmotionsIndex[7]++;
        sum += 1*8;
      } else if (selfAssessmentEmotion === "euphorisch") {
        enteredEmotionsIndex[8]++;
        sum += 1*9;
      }
      countedEntries++;

      let averageEmotion = Math.round(sum / countedEntries);
      let mostSelectedEmotion = [];

      for (let j = 0; j < enteredEmotionsIndex.length; j++) {
        if (enteredEmotionsIndex[j] > highestValue) {
          highestValue = enteredEmotionsIndex[j];
          mostSelectedEmotion = ` ${mentalHealthScale[j]}`;
        } else if (enteredEmotionsIndex[j] === highestValue) {
          mostSelectedEmotion.push(` ${mentalHealthScale[j]}`);
        } 
      }

      averageMentalHelthValue.innerText = mentalHealthScale[averageEmotion-1];
      selectedMentalHelthValue.innerText = mostSelectedEmotion;
    }
  }
}
window.addEventListener("DOMContentLoaded", updateAverageOnDashboard);

/*
index.html:1 Uncaught (in promise) Error: 
A listener indicated an asynchronous response by returning true, 
but the message channel closed before a response was received
???
*/