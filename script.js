const qrValue = document.querySelector(".input")
const btn = document.querySelector(".btn")
const img = document.querySelector(".img")
const span = document.querySelector(".span")



btn.addEventListener("click", function () {

    if (!qrValue.value) {
        alert("Nenhum texto insirido, tente novamente.")
        return
    }

    const api = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue.value}` 
    img.src = api
    span.classList.add("hide")
})
