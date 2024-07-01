const paraEl = document.getElementById("number")

function increaseBtn() {
    const previousCount = paraEl.textContent;
    const updatedEl = parseInt(previousCount) + 1
    if (updatedEl > 0) {
        paraEl.style.color = "red"
    } else if (updatedEl < 0) {
        paraEl.style.color = "green"
    } else {
        paraEl.style.color = "black"
    }

    paraEl.textContent = updatedEl
}


function decreaeBtn() {
    const previousCount = paraEl.textContent;
    const updatedEl = parseInt(previousCount) - 1
    if (updatedEl > 0) {
        paraEl.style.color = "red"
    } else if (updatedEl < 0) {
        paraEl.style.color = "green"
    } else {
        paraEl.style.color = "black"
    }

    paraEl.textContent = updatedEl
}

function resetBtn() {
    let value = 0;

    paraEl.textContent = value;

    paraEl.style.color = "black"
}



