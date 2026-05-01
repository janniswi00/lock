document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".background-digits").forEach(div => {
        div.addEventListener("click", digit_clicked);
    });

    document.getElementById("check-code").addEventListener("click", check_code);
});

function digit_clicked(e) {
    const div = e.currentTarget;
    let value = parseInt(div.textContent);
    value += 1;
    
    if (value === 5) {
        value = 1;
    }

    div.textContent = value;
}

function update_tries() {
    tries_text = document.getElementById("tries-count").textContent;
    let number = parseInt(tries_text.split(": ")[1]);
    number += 1;
    text_new = "Versuche: " + number;
    document.getElementById("tries-count").textContent = text_new;
}

function check_code() {
    const dig1 = parseInt(document.getElementById("digit1").textContent);
    const dig2 = parseInt(document.getElementById("digit2").textContent);
    const dig3 = parseInt(document.getElementById("digit3").textContent);
    const dig4 = parseInt(document.getElementById("digit4").textContent);
    
    if (dig1 === 4 && dig2 === 2 && dig3 === 1 && dig4 === 3) {
        console.log("richtig!!")
    }


    update_tries()
}