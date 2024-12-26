const openEle = document.querySelector(".open-area")
const infoEle = document.querySelector(".info")

openEle.addEventListener("click", ()=>{
  openEle.classList.toggle("open")
  infoEle.style.opacity = "none";
  setTimeout(()=>{
    openEle.style.display = "none"
  }, 3000)
})