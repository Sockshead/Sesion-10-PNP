function restringeFrase(fraseIng, numFrase) {
    var frasArr = "";
    var fraseRes = "";
    var frase = document.getElementById("fraseIng1").value;
    fraseIng = Array.from(frase);
    numFrase = document.getElementById("numFrase").value;
    var n = frase.length;

    for (var i = 0; i < numFrase; i++) {
        if (n > numFrase) {
            frasArr += fraseIng[i];
            fraseRes = frasArr + "...";
        } else {
            frasArr += fraseIng[i];
            fraseRes = frasArr;
        }
    }
    console.log(fraseRes);
    document.getElementById("fraseRes1").value = (fraseRes);
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