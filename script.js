const skillsTable = document.querySelector(".about-me-wrapper");
const portfolioCategories = document.querySelector(".my-portfolio-categories");
const portfolioProjects = document.querySelectorAll(".my-portfolio-projects div");
const slidePageUpButton = document.querySelector(".fa-caret-up");

window.addEventListener("scroll", ()=>{
 scrollPosition = window.scrollY;
 if(scrollPosition >= 100){  
  skillsTable.classList.add("skills-table-up")
 }

 if(scrollPosition >= 800){  
  portfolioCategories.classList.add("categories-show")
 }
 if(scrollPosition >= 900){
  for(let i = 0; i < portfolioProjects.length; i++)
  portfolioProjects[i].classList.add("projects-show")
 }
})

slidePageUpButton.addEventListener('click',()=>{
 window.scrollTo(0,0);
})