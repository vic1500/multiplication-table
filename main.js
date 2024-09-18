let length = document.getElementById("length");
let width = document.getElementById("width");
let displayBtn = document.getElementById("display-button");
let multTable = document.querySelector(".multiplication-table");
let reset = document.getElementById("reset-button");

reset.addEventListener('click', () => {
    multTable.innerHTML = '';
})

function calculate() {
    if (length.value <= 0 || width.value <= 0) {
        alert("Please enter a valid number")
    } else { 
        multTable.innerHTML = '';

        for (let w = 1; w <= parseInt(width.value); w++) {
        let newdiv = document.createElement('div');
        newdiv.innerHTML += `<p style = "margin: 0px; margin-bottom: 5px; text-decoration: underline;">Table ${w}</p>`

        for (let l = 1; l <= parseInt(length.value); l++) {
            newdiv.insertAdjacentHTML('beforeEnd',`<span style="display: block;">${w} x ${l} = ${w * l}</span>`) 
        }

        multTable.appendChild(newdiv)
    }}
}

displayBtn.addEventListener('click', () => {
   calculate()
})



function handleCalcKeydown(event) {
    if (event.key === 'Enter') {
        calculate()
    }
}
