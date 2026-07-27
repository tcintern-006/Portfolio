// Toggle theme
export function toogleTheme (val){
        document.documentElement.classList.toggle("dark")
}


// Toggle Slide Bar

export function toggleSlidebar() {
         let slidebar = document.querySelector("#slideBar")
         slidebar.classList.toggle("translate-y-full")
         
}