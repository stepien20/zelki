butOrder=document.querySelector(`#butord`)
console.log(butOrder)
butOrder.addEventListener(`click`,function(evt){
    evt.preventDefault()
    shape=document.querySelector(`#shape`).value
    colorR=document.querySelector(`#colorR`).value
    colorG=document.querySelector(`#colorG`).value
    colorB=document.querySelector(`#colorB`).value
    if(colorR>255||colorG>255||colorB>255){
        alert(`Podaj RGB w zakresie 0-255 !!!`)
    }
    display=document.querySelector(`#display`)
})
