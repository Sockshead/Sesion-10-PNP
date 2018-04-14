function restringeFrase(fraseIng, numFrase) {
    var frasArr = "";
    fraseIng = Array.from(document.getElementById("fraseIng1").value);
    numFrase = document.getElementById("numFrase").value;

    for (var i = 0; i < numFrase; i++) {
        frasArr += fraseIng[i];
    }
    console.log(frasArr);
    document.getElementById("fraseRes1").value = frasArr;
}

function estidiaFrase(fraseIng, palFrase) {
    var pFrase = "";
    var frasArr = "";
    var cPal = "";
    var frase = document.getElementById("fraseIng2").value;
    fraseIng = Array.from(frase);
    palFrase = document.getElementById("pFrase").value;
    var palArra = Array.from(palFrase);

    var n = palFrase.length;

    for (var i = 0; i < n; i++) {
        frasArr += fraseIng[i].toUpperCase();
        cPal += palArra[i].toUpperCase();
        if (frasArr == cPal) {
            pFrase = "Verdadero";
            document.getElementById("fraseRes2").value = pFrase;
        } else {
            pFrase = "Falso";
            document.getElementById("fraseRes2").value = pFrase;
        }
    }
    console.log(frasArr);
    console.log(cPal);
    console.log(pFrase);
}