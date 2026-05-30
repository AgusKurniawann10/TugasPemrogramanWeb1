function cekNilai(){

    let nilai =
    document.getElementById("nilai").value;

    let grade = "";
    let status = "";
    let predikat = "";

    if(nilai >= 85){

        grade = "A";
        status = "Lulus";
        predikat = "Sangat Memuaskan";

    }else if(nilai >= 70){

        grade = "B";
        status = "Lulus";
        predikat = "Memuaskan";

    }else if(nilai >= 60){

        grade = "C";
        status = "Lulus";
        predikat = "Cukup";

    }else{

        grade = "D";
        status = "Tidak Lulus";
        predikat = "Kurang";

    }

    document.getElementById("hasil").innerHTML =
    `
    Nilai : ${nilai}<br>
    Grade : ${grade}<br>
    Status : ${status}<br>
    Predikat : ${predikat}
    `;
}