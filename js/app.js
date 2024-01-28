let aramaText = document.getElementById("aramaText");
let aracListe = document.querySelectorAll(".list-group > *");

aramaText.onkeyup = (e) => {
    let arama = e.target.value.toLowerCase();
    for(let i of aracListe) {
        let item = i.innerHTML.toLowerCase();
        if(item.indexOf(arama) === -1) {
            i.classList.add("gizle");
        } else {
            i.classList.remove("gizle");
        }
    }
}