const accordionHeaders = document.querySelectorAll(".notes-container-header");
const accordionContents = document.querySelectorAll(".notes-container-content");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".notes-container-content");
    
        accordionContents.forEach((content => {
            if (content !== accordionContent) {
                content.classList.remove("active");
                content.style.maxHeight = "0";
            }
        }));

        accordionContent.classList.toggle("active");

        if (accordionContent.classList.contains("active")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";  
        } else {
            accordionContent.style.maxHeight = "0";
        }
    });
});

const notesContainer = document.getElementById("accordion-item");
const addNoteButton = document.querySelector(".btn add-note-btn");

addNoteButton.addEventListener("click", () => addNote());

function addNote() {

}

function getNotes() {
    return JSON.parse(localStorage.getItem("diarynotes-notes") || "[]");
}

function saveNotes() {
    localStorage.setItem("diarynotes-notes", JSON.stringify(notes));
}

function updateNote() {

}

