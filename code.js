var dig1_result = 1
var dig2_result = 6
var dig3_result = 0
var dig4_result = 3
digs_results_list = [dig1_result, dig2_result, dig3_result, dig4_result]
const min_dig = 0
const max_dig = 9

const tries_text = document.getElementById("tries-count").textContent;
var tries = parseInt(tries_text.split(": ")[1]);

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
    
    if (value === max_dig + 1) {
        value = min_dig;
    }

    div.textContent = value;
}

function update_tries() {
    tries += 1;
    text_new = "Versuche: " + tries;
    document.getElementById("tries-count").textContent = text_new;
}

function check_code() {
    const dig1 = parseInt(document.getElementById("digit1").textContent);
    const dig2 = parseInt(document.getElementById("digit2").textContent);
    const dig3 = parseInt(document.getElementById("digit3").textContent);
    const dig4 = parseInt(document.getElementById("digit4").textContent);
    const digs_list = [dig1, dig2, dig3, dig4];
    
    update_tries()

    if (dig1 === dig1_result && dig2 === dig2_result && dig3 === dig3_result && dig4 === dig4_result) {
        finish_animation()
    }

    for (let i=0; i<digs_list.length; i++){
        if (digs_list[i] === digs_results_list[i]) {
            document.getElementById("digit" + (i+1)).style.background = "rgb(94, 214, 110)";
        } else {
            document.getElementById("digit" + (i+1)).style.background = "white"
        }
    }
}

function finish_animation() {
    document.getElementById("animation-div").style.visibility = "visible"
    document.getElementById("button-div").style.visibility = "hidden"
    document.getElementById("tries-count").style.visibility = "hidden"
    document.querySelector(".lock").classList.add("open");

    if (tries === 1) {
        document.getElementById("caption").innerHTML += "Du hast " + tries + " Versuch gebraucht."
    } else {
        document.getElementById("caption").innerHTML += "Du hast " + tries + " Versuche gebraucht."
    }
}