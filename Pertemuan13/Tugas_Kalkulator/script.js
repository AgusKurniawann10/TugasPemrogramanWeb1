function hitung(){

    let angka1 =
    parseFloat(
    document.getElementById("angka1").value
    );

    let angka2 =
    parseFloat(
    document.getElementById("angka2").value
    );

    let operator =
    document.getElementById("operator").value;

    let hasil;

    if(operator == "+"){

        hasil = angka1 + angka2;

    }else if(operator == "-"){

        hasil = angka1 - angka2;

    }else if(operator == "*"){

        hasil = angka1 * angka2;

    }else if(operator == "/"){

        hasil = angka1 / angka2;

    }

    document.getElementById("hasil").innerHTML =
    "Hasil : " + hasil;
}