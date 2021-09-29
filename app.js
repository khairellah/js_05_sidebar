// Get the Html Elements
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Add the event
toggleBtn.addEventListener("click",()=>{
    // verify
    // console.log(sidebar.classList);
    /* Old way to remove or add a classe into an element 
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar")
    }
    else{
        sidebar.classList.add("show-sidebar")}
    */
    // New way : toggle the sidbar to add and remove the class show-sidebar
    sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", ()=> {
    sidebar.classList.remove("show-sidebar") 
})