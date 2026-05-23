function hitung(){

let nama =
document.getElementById("nama").value;

let jumlah =
Number(document.getElementById("jumlah").value);

let harga =
Number(document.getElementById("harga").value);


// Operator Aritmatika
let total =
jumlah * harga;


// Operator Penugasan
let diskon = 0;


// Operator Pembanding
if(total >= 500000){

diskon = total * 0.10;

}


let bayar =
total - diskon;


// Output
document.getElementById("hasil").innerHTML =

`
Nama : ${nama}<br>

Total Belanja : Rp ${total}<br>

Diskon : Rp ${diskon}<br>

Total Bayar : Rp ${bayar}

`;

}