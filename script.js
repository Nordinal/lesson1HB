const textarea = document.querySelector(".textarea")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const changeColor = document.querySelector('.changeColor');
const body = document.querySelector(".body")

textarea.addEventListener('input', (e) => {
    localStorage.setItem("textarea", e.target.value)
})

btn.addEventListener('click', (e) => {
    localStorage.removeItem("textarea")
    textarea.value = ""
})

changeColor.addEventListener("click", () => {
    localStorage.setItem("theme", input.value)
    body.style.backgroundColor = localStorage.getItem('theme');
})

textarea.value = localStorage.getItem('textarea')

body.style.backgroundColor = localStorage.getItem("theme")