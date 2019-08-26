 // 1
 let footer = document.querySelector("footer")
 let i = 1
 footer.addEventListener("click", function() {
   console.log("clic numéro " + i);
   i ++;
 });

 // 2
let burger = document.getElementsByClassName("navbar-toggler")[0]
let Menu = document.getElementById("navbarHeader")
burger.addEventListener("click", function() {
  Menu.classList.toggle("collapse");
});

//  3
let carteRouge = document.getElementsByClassName("card")[0]
let rouge = document.getElementsByClassName("btn-outline-secondary")[0]
rouge.addEventListener("click", function() {
  carteRouge.style.color = "red"
});

// 5
let navBar = document.getElementsByClassName("navbar")[0]
navBar.addEventListener("dblclick", function() {
    document.styleSheets[0].disabled = true;
})
//do {navBar.addEventListener("dblclick", function() {
  //  document.styleSheets[0].disabled = false})} 
//while (document.styleSheets[0].disabled = true);

// 6
for (var i = 0; x < 6; i++) {
  let carteParent = document.getElementsByClassName("card")[x]
  let reduireCarteBtn = document.getElementsByClassName("btn-success")[x]
  let reduireCarte = document.getElementsByClassName("card-img-top")[x]
  let reduireStatus = false
  reduireCarteBtn.addEventListener("mouseover", function() {
    if (reduireStatus === false) {
      reduireCarte.style.height = "20%"
      reduireCarte.style.width = "20%"
      carteParent.getElementsByTagName("p")[0].classList.add("collapse");
      reduireStatus = true
    }else {
      reduireCarte.style.height = ""
      reduireCarte.style.width = ""
      carteParent.getElementsByTagName("p")[0].classList.remove("collapse")
      reduireStatus = false
    }
  });
}


