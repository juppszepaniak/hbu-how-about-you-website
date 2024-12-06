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

function addDiaryEntry() {
    // Creating a div element
    let entryDiv = document.createElement("Div");
    entryDiv.className = "accordion-item";

    // Adding the notes-container-header 
    const notesHeader = document.createElement("Div");
    entryDiv.className = "notes-container-header";

    //Adding Title
    const title = document.createElement("H3");
    const titleText = document.createTextNode(
      "Neuer Eintrag"
    );
    title.appendChild(titleText);
    notesHeader.appendChild(title);


    // Appending the div element to ""
    document.getElementsByClassName("accordion")[0].appendChild(entryDiv);
  }