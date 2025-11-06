export function NavFunction() {
  const openbtn = document.querySelector("#hamburger");
  const closebtn = document.querySelector("#closeBox");
  const hamburgerOption = document.querySelector("#hamburgerOption");
  const mainphoto = document.querySelector("#mainPhoto2");

  if (!openbtn || !closebtn || !hamburgerOption) return;

  // Open menu
  openbtn.addEventListener("click", () => {
    openbtn.style.display = "none";
    closebtn.style.display = "unset";
    hamburgerOption.style.display = "flex";
    mainphoto.style.display = "none";
  });

  //  Close menu
  closebtn.addEventListener("click", () => {
    openbtn.style.display = "unset";
    closebtn.style.display = "none";
    hamburgerOption.style.display = "none";
    mainphoto.style.display = "unset";
  });




  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      hamburgerOption.style.display = "none";
      openbtn.style.display = "none";   
      closebtn.style.display = "none";
      mainphoto.style.display = "unset";
    } else {
      openbtn.style.display = "flex";   
      closebtn.style.display = "none";
    }
  });


  window.addEventListener("resize" , ()=>{
    if(window.innerWidth >804){
        mainphoto.style.display = "none"
    }
  })
}
