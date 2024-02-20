const datumInput = document.getElementById("date");

document.querySelector("button").addEventListener("click", function (){
    if(Number.parseInt(datumInput.value) === parseInt(datumInput.value, 10) && datumInput.value.length !== 0 && datumInput.value !== "1" && document.getElementById("titulek").value.length !== 0) {
        if (parseInt(datumInput.value, 10) <= 12) {
            const ukol_container = document.getElementById("ukol_container");
            const newElement = document.createElement("div");
            newElement.className = "ukol";
            const newElementNadpis = document.createElement("p");
            newElementNadpis.className = "nadpisUkol";
            newElementNadpis.innerHTML = document.getElementById("titulek").value;
            newElement.appendChild(newElementNadpis);
            ukol_container.appendChild(newElement);
            const flex = document.createElement("div");


            const newElementSelect = document.createElement("p");
            let x = document.querySelector("select").value;
            newElementSelect.innerHTML = "Priorita: " + x;
            flex.appendChild(newElementSelect);
            newElementSelect.className = "a";
            const a = document.createElement("p");
            a.innerHTML = "Měsíc: " + datumInput.value;
            flex.appendChild(a);
            a.className = "a";
            newElement.appendChild(flex);
            flex.className = "flex";
        }
    }
})