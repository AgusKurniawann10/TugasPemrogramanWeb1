function hitungBonus(gaji, jam){

    let bonus =
    jam * 50000;

    return bonus;
}

function hitungTotal(gaji, bonus){

    return gaji + bonus;
}

function prosesGaji(){

    let nama =
    document.getElementById("nama").value;

    let gaji =
    parseInt(
    document.getElementById("gaji").value
    );

    let jam =
    parseInt(
    document.getElementById("jam").value
    );

    let bonus =
    hitungBonus(gaji, jam);

    let total =
    hitungTotal(gaji, bonus);

    document.getElementById("hasil").innerHTML =
    `
    Nama : ${nama}<br>
    Gaji Pokok : Rp ${gaji}<br>
    Uang Lembur : Rp ${bonus}<br>
    Total Gaji : Rp ${total}
    `;
}