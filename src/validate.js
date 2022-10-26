const input = document.querySelector(".js-input")
const button = document.querySelector(".js-button")
const p = document.querySelector(".js-error")

const handleChange = () => {
    try {
        if (!input.value.trim()) throw new Error("Поле не должно быть пустым")
        if (isNaN(input.value)) throw new Error("Значение не является числом")
        if (input.value < 5 || input.value > 10) throw new Error("Значение больше 10 или меньше 5")
        p.innerHTML = ""
    }
    catch (e){
        p.innerHTML = e.message
    }
}



button.addEventListener('click', handleChange);