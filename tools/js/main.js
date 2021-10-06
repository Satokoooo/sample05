const targetElement = document.querySelectorAll(".sectionTitle, .section_text, .work_item, .company_item");
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight*.4
    if(window.innerHeight > getElementDistance) {
     targetElement[i].classList.add("show");
    }
  }
});