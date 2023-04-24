

// -----------------------Narvebar open and close---------------
var sidemenu = document.getElementById("sidemenu")

function openmenu() {
  sidemenu.style.right = '0'
}


function closemenu() {
  sidemenu.style.right = '-250px'
}




let theme = localStorage.getItem("theme")
const themeBtn = document.getElementById("dark")


if (theme === "dark-theme") {
  document.body.classList.add("dark-theme")
}

themeBtn.onclick = function () {
  if (theme === "dark-theme") {
    localStorage.setItem("theme", "light-theme");
    document.body.classList.remove("dark-theme")
    theme = "light-theme"

  }

  else {
    localStorage.setItem("theme", "dark-theme");
    document.body.classList.add("dark-theme")
    theme = "dark-theme"
  }
};

// for(box of boxColor){

// }

// let theme = localStorage.getItem("theme")
// const themeBtn = document.querySelector("button")
// if(theme === "dark"){
//     document.body.classList.add("dark")
//     themeBtn.textContent = "Light Mode"
// }

// themeBtn.onclick = function(){
//     if(theme === "dark"){
//         localStorage.setItem("theme", "light");
//         document.body.classList.remove("dark")
//         themeBtn.textContent = "Dark Mode"
//         theme = "light"
//     }

//     else{
//         localStorage.setItem("theme", "dark");
//         document.body.classList.add("dark")
//         themeBtn.textContent = "Light Mode"
//         theme = "dark"
//     }
// };


// --------------------background Color--------------------- 
// const lightButton = document.getElementById("light").onclick = function(){
//     colorMode = document.querySelector("body")
//     sideColorMode = document.getElementById("sidemenu")
//     boxColor =document.querySelectorAll("skills1")
//     headerColor = document.querySelector("header")

// ----------------body color-------------------
// colorMode.style.backgroundColor = "white"
// colorMode.style.color = "black"

// --------------------narve color--------------------
// headerColor.style.color = "black"
// headerColor.style.backgroundColor = "white"

// sideColorMode.style.color = "black"
// sideColorMode.style.backgroundColor = "white"


// ------------------ skills box----------------
// }


// const darkButton = document.getElementById("dark").onclick = function(){
//     colorMode2 = document.querySelector("body")
//     sideColorMode2 = document.getElementById("sidemenu")
//     boxColor =document.querySelectorAll(".skills1")
//     headerColor = document.querySelector("header")

// ----------------body color-------------------
// colorMode2.style.backgroundColor = "black"
// colorMode2.style.color = "white"


// --------------------narve color--------------------
// headerColor.style.color = "white"
// headerColor.style.backgroundColor = "black"

// --------------------sidemenu-------------------------
//     sideColorMode2.style.color = "white"
//     sideColorMode2.style.backgroundColor = "black"

//     for(box of boxColor){
//       box.style.backgroundColor = "rgb(16, 16, 16)"
//       box.style.boxShadow = "none"
//       box.style.color = "white"
//     }
// }



// ------------new popup------------------
let preveiwContainer = document.querySelector(".services-preview");
let previewBox = preveiwContainer.querySelectorAll(".service");

document.querySelectorAll(".uil-arrow-right").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".uil-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

