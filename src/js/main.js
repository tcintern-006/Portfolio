import '../style.css';
import { toggleSlidebar, toogleTheme } from './theme';


// Theme toggle 

let dark = document.querySelector("#darkMode")
let light = document.querySelector("#lightMode")

dark.addEventListener('click',()=> toogleTheme());
light.addEventListener('click',()=> toogleTheme());
// Ends here


// Toggle Slide bar 

let openBtn = document.querySelector("#hamburgIcon");
let xBtn    = document.querySelector("#Xbtn");

openBtn.addEventListener("click",()=>  toggleSlidebar())
xBtn.addEventListener("click",()=> toggleSlidebar())
