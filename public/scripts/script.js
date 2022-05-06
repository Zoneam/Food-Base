// Grabbing all my cards and adding event listeners to titles
const myLinks = document.querySelectorAll(".my-cards");
if(myLinks.length){
        myLinks.forEach(el => {
            el.addEventListener("click", (e) => {
            e.target.previousElementSibling.hidden = false;
            e.target.hidden = true;
        })
    })
}
// Grabbing all my cards and adding event listeners to save buttons
const saveBtn = document.querySelectorAll(".save-btn");
if(saveBtn.length){
    saveBtn.forEach(el => {
            el.addEventListener("click", (e) => {
            e.target.disabled = true;
            e.target.innerHTML  = 'Saved';
            e.target.closest('form').submit();              
          })
      })
}