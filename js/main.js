let accordion = document.getElementsByClassName("accordion-btn")
let accordionContent = document.getElementsByClassName("accordion-content")

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        let setClasses = !this.classList.contains("active")
        setClass(accordion, 'active', 'remove')
        setClass(accordionContent, "no-height", "add")
        if (setClasses) {
            this.classList.toggle("active")
            this.nextElementSibling.classList.toggle("no-height")
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px"
        }
    })
}

function setClass(el, className, fnName) {
    for (let i = 0; i < el.length; i++) {
        el[i].classList[fnName](className)
    }
}