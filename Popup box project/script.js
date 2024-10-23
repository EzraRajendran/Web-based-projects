 // To access the show button element 
 let showbtn = document.getElementById("showbtn");

 // To access the Close button element 
 let closebtn = document.getElementById("closebtn");
 
 // To acces the popup element 
 let popup = document.querySelector(".popup"); 
 let subp = document.getElementById("sub-p"); 
 
 // To show the popup on click 
 showbtn.addEventListener("click", () => { 
     popup.style.display = "block"; 
     showbtn.style.display = "none"; 
     document.body.style.backgroundColor = " #e6d32a"; 
     subp.style.display = "none"; 
 }); 

 // To close the popup on click 
 closebtn.addEventListener("click", () => { 
     popup.style.display = "none"; 
     showbtn.style.display = "block"; 
     document.body.style.backgroundColor = " #e6d32a"; 
     subp.style.display = "block"; 
 });
 
 