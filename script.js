document.addEventListener("DOMContentLoaded", loadHistory);
function appendValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result;
        saveHistory(expression + " = " + result);
    } catch {
        alert("Perhitungan tidak valid");
    }
}
function saveHistory(entry) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.unshift(entry);
    localStorage.setItem("history", JSON.stringify(history));
    loadHistory();
}
function loadHistory() {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    let historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}