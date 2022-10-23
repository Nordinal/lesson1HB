const name = document.querySelector('.name')
const tel = document.querySelector(".tel")
const notification = document.querySelector('.disabled')
const loading = document.querySelector('.loading')


btn.onclick = () => {
    console.log(loading)
    btn.classList.add('disabledBtn')
    loading.classList.remove('disabledLoading')
    setTimeout(() => {
        console.log(name.value)
        notification.classList.remove("disabled")
        notification.innerHTML = `${name.value}, ваша заявка принята, мы вам позвоним на номер ${tel.value}`
        setTimeout(() => {
            notification.classList.add("disabled")
        }, 5000)
        btn.classList.remove('disabledBtn')
        loading.classList.add('disabledLoading')
    }, 2000)
}