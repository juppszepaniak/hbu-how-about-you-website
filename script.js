/* Hamburger to menu*/

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Textarea */

function autoResizeTextarea(textarea) {
  textarea.style.height = "auto"; // Zurücksetzen, um die benötigte Scrollhöhe zu messen
  textarea.style.height = `${textarea.scrollHeight}px`; // Höhe anpassen
}

document.addEventListener("input", (event) => {
  if (event.target.tagName.toLowerCase() === "textarea") {
    autoResizeTextarea(event.target);
  }
});

/* Diary */

const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

function addDiaryEntry() {
  const diaryEntryContainer = document.getElementById("diary-section-id");
  const curDate = new Date().toLocaleDateString("de-DE");
  const newDiaryEntryId = removeSpecialChars(curDate);

  if (!document.getElementById(newDiaryEntryId)) {
    const newDiaryEntryHTML = `
        <div id="${newDiaryEntryId}" class="content-container">
            <div class="diary-entry-container">
            <div class="diary-entry-title">
                <h2>${curDate}</h2>
            </div>
            <div class="diary-entry-content">
                <textarea id="${newDiaryEntryId}" class="note" placeholder="Schreibe hier über deine Gedanken..." required></textarea>
            </div>
            </div>
        </div>
    `;

    diaryEntryContainer.insertAdjacentHTML("afterbegin", newDiaryEntryHTML);
  } else {
    alert(`Du hast bereits einen Eintrag für heute, den ${curDate} erstellt`);
  }
}

function askRandomQuestion() {
  const questions = [
    "Wie war dein Tag?",
    "Wofür bist du heute dankbar?",
    "Woran denkst du gerade?",
    "Worauf freust du dich?",
    "Was hat dich heute glücklich gemacht?",
    "Was hast du heute gelernt?",
    "Was wünschst du dir für morgen?",
  ];

  const randomIndex = Math.floor(Math.random() * questions.length);
  alert(questions[randomIndex]);
}

function getDecision() {
  const decision = Math.random() < 0.5 ? "Kopf" : "Zahl";
  alert(`>> ${decision}`);
}
