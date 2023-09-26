
const butOrder=document.querySelector(`#butord`)
butOrder.addEventListener(`click`,function(evt){
    evt.preventDefault()
    const shape=document.querySelector(`#shape`).value
    const colorR=document.querySelector(`#colorR`).value
    const colorG=document.querySelector(`#colorG`).value
    const colorB=document.querySelector(`#colorB`).value
    if(colorR>255||colorG>255||colorB>255||colorR<0||colorG<0||colorB<0){
        alert(`Podaj RGB w zakresie 0-255 !!!`);
        return 0;
    }
    const tabshape=document.querySelectorAll(`li[class="shape"]`)
    let chosenShape=''
    for(let i=1;i<=tabshape.length;i++){
        if (i==shape){
            chosenShape=tabshape[i-1].outerText
            break;
        }
        else chosenShape='inny kształt'
    }
    display=document.querySelector(`#display`)
    display.innerHTML=`Zamówiłeś żelka: ${chosenShape}`
    butcol=document.querySelector(`#butcol`)
    butcol.style.backgroundColor=`rgb(${colorR},${colorG},${colorB})`
}
)
