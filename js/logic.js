let historyList = [];

    window.onload = () => {
        const savedHistory = localStorage.getItem("calcHistory");
        if (savedHistory) {
            historyList = JSON.parse(savedHistory);
            renderHistory();
        }
    };

    function calculate(operator) {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);

        let result;
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
        }

        saveToHistory(`${num1} ${operator} ${num2} = ${result}`);
    }

    function saveToHistory(operation) {
        historyList.unshift(operation);
        if (historyList.length > 10) historyList.pop();
        localStorage.setItem("calcHistory", JSON.stringify(historyList));
        renderHistory();
    }

    function renderHistory() {
        const historyDiv = document.getElementById("history");
        historyDiv.innerHTML = historyList.length
            ? "<strong>Historial:</strong><br>" + historyList.join("<br>")
            : "<em>Sin operaciones</em>";
    }

    function clearHistory() {
        historyList = [];
        localStorage.removeItem("calcHistory");
        renderHistory();
    }