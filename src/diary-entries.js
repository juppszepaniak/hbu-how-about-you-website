/* DIARY */

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
              <textarea id="textarea-${newDiaryEntryId}" class="note" 
                        placeholder="Schreibe hier über deine Gedanken..." required></textarea>
            </div>
          </div>
          <div class="diary-entry-btn-container">
            <button class="container-btn primary-btn" onclick="saveDiaryEntry('${newDiaryEntryId}')">
              Eintrag speichern
            </button>
            <button class="container-btn secondary-btn" onclick="deleteDiaryEntry('${newDiaryEntryId}')">
              Eintrag löschen
            </button>
          </div>
        </div>
      `;

    diaryEntryContainer.insertAdjacentHTML("afterbegin", newDiaryEntryHTML);

    const newTextarea = document.getElementById(`textarea-${newDiaryEntryId}`);

    adjustTextareaHeight(newTextarea);
    newTextarea.addEventListener("input", () =>
      adjustTextareaHeight(newTextarea)
    );
  } else {
    alert(`Du hast bereits einen Eintrag für heute, den ${curDate} erstellt`);
  }

  textarea.addEventListener("input", () => adjustTextareaHeight(textarea));
}

function saveDiaryEntry(entryId) {
  const textarea = document.getElementById(`textarea-${entryId}`);
  const content = textarea.value.trim();
  const date = new Date().toLocaleDateString("de-DE");

  if (content) {
    const diaryEntry = { date, content };
    localStorage.setItem(`diary-${entryId}`, JSON.stringify(diaryEntry));
    alert("Eintrag gespeichert!");
  } else {
    alert("Bitte schreibe etwas in den Eintrag, bevor du ihn speicherst.");
  }
}

function deleteDiaryEntry(entryId) {
  const entry = document.getElementById(entryId);
  if (entry) {
    entry.remove();
  }

  localStorage.removeItem(`diary-${entryId}`);
  alert("Eintrag erfolgreich gelöscht!");
}

function getDiaryEntries() {
  let diaryEntries = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("diary-")) {
      const entry = JSON.parse(localStorage.getItem(key));
      diaryEntries.push(entry);
    }
  }
  return diaryEntries;
}

function sortDiaryEntriesByDate(entries) {
  return entries
    .sort((a, b) => {
      const dateA = new Date(a.date.split(".").reverse().join("-"));
      const dateB = new Date(b.date.split(".").reverse().join("-"));

      console.log(dateA, dateB);

      return dateA - dateB;
    })
    .reverse();
}

function updateDiaryEntries() {
  const diaryEntryContainer = document.getElementById("diary-section-id");
  diaryEntryContainer.innerHTML = "";

  const diaryEntries = getDiaryEntries();
  const sortedEntries = sortDiaryEntriesByDate(diaryEntries);

  sortedEntries.forEach((entry) => {
    const entryId = removeSpecialChars(entry.date);
    const savedDiaryEntryHTML = `
      <div id="${entryId}" class="content-container">
        <div class="diary-entry-container">
          <div class="diary-entry-title">
            <h2>${entry.date}</h2>
          </div>
          <div class="diary-entry-content">
            <textarea id="textarea-${entryId}" class="note" required>${entry.content}</textarea>
          </div>
        </div>
        <div class="diary-entry-btn-container">
          <button class="container-btn primary-btn" onclick="saveDiaryEntry('${entryId}')">
            Eintrag speichern
          </button>
          <button class="container-btn secondary-btn" onclick="deleteDiaryEntry('${entryId}')">
            Eintrag löschen
          </button>
        </div>
      </div>
    `;
    diaryEntryContainer.insertAdjacentHTML("beforeend", savedDiaryEntryHTML);
  });
}

window.addEventListener("DOMContentLoaded", updateDiaryEntries);

/* Todo-Liste */

function safeTodoList() {

}

function deleteTodoList() {

}

function displayTodoList() {

}

/* window.addEventListener("DOMContentLoaded", updateDiaryEntries); */

/* TEXTEREA */

function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("textarea").forEach((textarea) => {
    adjustTextareaHeight(textarea);

    textarea.addEventListener("input", () => adjustTextareaHeight(textarea));
  });
});

document.addEventListener("input", (event) => {
  if (event.target.tagName.toLowerCase() === "textarea") {
    autoResizeTextarea(event.target);
  }
});

/* ASK QUESTION */

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
