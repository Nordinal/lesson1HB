const name = document.querySelector('.name')
const tel = document.querySelector(".tel")
const notification = document.querySelector('.disabled')
const loading = document.querySelector('.loading')


btn.onclick = () => {
    if(name.value.trim() && tel.value.trim()){
        btn.classList.add('disabledBtn')
        loading.classList.remove('disabledLoading')
        setTimeout(() => {
            notification.classList.remove("disabled")
            notification.innerHTML = `${name.value}, ваша заявка принята, мы вам позвоним на номер ${tel.value}`
            setTimeout(() => {
                notification.classList.add("disabled")
            }, 5000)
            btn.classList.remove('disabledBtn')
            loading.classList.add('disabledLoading')
        }, 3000)
    }
    else{
        notification.classList.remove("disabled")
            notification.innerHTML = `Поля для ввода не должны быть пустыми`
            setTimeout(() => {
                notification.classList.add("disabled")
            }, 5000)
    }
}