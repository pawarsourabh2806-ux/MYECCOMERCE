// const bar = document.getElementById("bar");
// const nav = document.querySelector(".navlink");

// if (bar) {
//   bar.addEventListener("click", () => {
//     nav.classList.add("active");
//   });
// }

const bar = document.querySelector("#bar");
const nav = document.querySelector(".navlink");

const closed = document.querySelector("#close");

if(bar){
    bar.addEventListener(('click'),()=>{
        nav.classList.add("active")
    })
}

if(closed){
 closed.addEventListener(('click'),()=>{
    nav.classList.remove("active");
 })
}