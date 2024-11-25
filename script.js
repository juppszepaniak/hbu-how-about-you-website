const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "40px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});

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