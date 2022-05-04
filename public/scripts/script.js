const myLinks = document.querySelectorAll(".my-cards");
  
if(myLinks.length){
    myLinks.forEach(el=>{
            el.addEventListener("click", (e) => {
            e.target.previousElementSibling.hidden = false;
            e.target.hidden = true;
        })
    })
}
  
