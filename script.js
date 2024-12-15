/* HAMBURGER MENU */

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* TEXTEREA */

function autoResizeTextarea(textarea) {
  textarea.style.height = "auto"; // Zurücksetzen, um die benötigte Scrollhöhe zu messen
  textarea.style.height = `${textarea.scrollHeight}px`; // Höhe anpassen
}

document.addEventListener("input", (event) => {
  if (event.target.tagName.toLowerCase() === "textarea") {
    autoResizeTextarea(event.target);
  }
});

/* DIARY */

const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, "");
};

/* "localStorage Eintrage" anzeigen */

function loadDiaryEntries() {

}

/* "Neuer Eintrag" erstellen */

function addDiaryEntry() {
  const diaryEntryContainer = document.getElementById("diary-section-id");
  const curDate = new Date().toLocaleDateString("de-DE");
  const curContent = document.getElementById("");
  const newDiaryEntryId = removeSpecialChars(curDate);

  if (!document.getElementById(newDiaryEntryId)) {
    const newDiaryEntryHTML = `
        <div id="${newDiaryEntryId}" class="content-container">
            <div class="diary-entry-container">
            <div class="diary-entry-title">
                <h2>${curDate}</h2>
            </div>
            <div class="diary-entry-content">
                <textarea id="0${newDiaryEntryId}" class="note" placeholder="Schreibe hier über deine Gedanken..." required></textarea>
            </div>
            </div>
          <div class="diary-entry-btn-container">
            <button class="container-btn primary-btn" onclick="safeDiaryEntry()">
              Eintrag speichern
            </button>
            <button class="container-btn secondary-btn" onclick="deleteDiaryEntry()">
              Eintrag löschen
            </button>
          </div>
        </div>
    `;

    diaryEntryContainer.insertAdjacentHTML("afterbegin", newDiaryEntryHTML);

    const diaryEntries = {
      date: curDate,
      content: curContent,
    };

    /* "Neuer Eintrag" im localStorage speichern */

    localStorage.setItem(`000${newDiaryEntryId}`, JSON.stringify(diaryEntries));
  } else {
    alert(`Du hast bereits einen Eintrag für heute, den ${curDate} erstellt`);
  }
}

/* update localStorage and Website */

function updateDiaryEntries() {
  const diaryEntryContainer = document.getElementById("diary-section-id");
  const curDate = new Date().toLocaleDateString("de-DE");
  const curContent = document.getElementById(textarea.type);
  const DiaryEntryIds = removeSpecialChars(curDate);

  const safedDiaryEntries = localStorage.getItem(`000${lastDiaryEntryId}`);
  
  /* Array / Object durchlaufen for ( ... of ...) */

}

/* ASK QUESTION AI */

function askRandomQuestion() {
  const questions = [
    "Wie war dein Tag?",
    "Wofür bist du heute dankbar?",
    "Was beschäftigt dich aktuell?",
    "Worauf freust du dich?",
    "Was hat dich heute glücklich gemacht?",
    "Was hast du heute gelernt?",
    "Was wünschst du dir für morgen?",
  ];

  const randomIndex = Math.floor(Math.random() * questions.length);
  alert(questions[randomIndex]);
}

/* FLIP A COIN*/

function getDecision() {
  const decision = Math.random() < 0.5 ? "Kopf" : "Zahl";
  alert(`>> ${decision}`);
}
