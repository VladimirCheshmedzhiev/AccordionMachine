function toggle() {
    let btn = document.getElementsByClassName("button")[0];
    let text = document.getElementById("extra");

    if (btn.textContent === "More") {
        btn.textContent = "Less";
    } else {
        btn.textContent = "More";
    }

    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}