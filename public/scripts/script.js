const myLinks = document.querySelectorAll(".my-cards");
  
if(myLinks.length){
    myLinks.forEach(el=>{
            el.addEventListener("click", (e) => {
            e.target.previousElementSibling.hidden = false;
            e.target.hidden = true;
        })
    })
}
  

// const saveBtn = document.querySelectorAll(".save-btn");
  
//   if(saveBtn.length){
//       saveBtn.forEach(el=>{
//               el.addEventListener("click", (e) => {
             
              
//               e.target.disabled = true;
              
//               e.target.innerHTML  = 'Saved';
//                e.preventDefault();
//               return false;  
              
//           })
//       })
//   }
   