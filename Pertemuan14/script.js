let mahasiswa = JSON.parse(localStorage.getItem("dataMahasiswa")) || [];

let indexEdit = -1;

tampilData();

function tambahMahasiswa(){

    let nim =
    document.getElementById("nim").value;

    let nama =
    document.getElementById("nama").value;

    let jurusan =
    document.getElementById("jurusan").value;

    let fakultas =
    document.getElementById("fakultas").value;

    if(
        nim == "" ||
        nama == "" ||
        jurusan == "" ||
        fakultas == ""
    ){
        alert("Semua data wajib diisi!");
        return;
    }

    let data = {
        nim: nim,
        nama: nama.toUpperCase(),
        jurusan: jurusan,
        fakultas: fakultas
    };

    mahasiswa.push(data);

    simpanLocalStorage();

    tampilData();

    resetForm();
}

function tampilData(){

    let tabel =
    document.getElementById("dataMahasiswa");

    tabel.innerHTML = "";

    mahasiswa.forEach(function(item, index){

        tabel.innerHTML += `
        <tr>

            <td>${item.nim}</td>

            <td>${item.nama}</td>

            <td>${item.jurusan}</td>

            <td>${item.fakultas}</td>

            <td>

                <button
                class="action-btn edit-btn"
                onclick="editMahasiswa(${index})">
                Edit
                </button>

                <button
                class="action-btn delete-btn"
                onclick="hapusMahasiswa(${index})">
                Delete
                </button>

            </td>

        </tr>
        `;
    });
}

function editMahasiswa(index){

    let data = mahasiswa[index];

    document.getElementById("nim").value =
    data.nim;

    document.getElementById("nama").value =
    data.nama;

    document.getElementById("jurusan").value =
    data.jurusan;

    document.getElementById("fakultas").value =
    data.fakultas;

    indexEdit = index;
}

function updateMahasiswa(){

    if(indexEdit == -1){
        alert("Pilih data yang ingin diedit!");
        return;
    }

    mahasiswa[indexEdit] = {

        nim:
        document.getElementById("nim").value,

        nama:
        document.getElementById("nama")
        .value.toUpperCase(),

        jurusan:
        document.getElementById("jurusan").value,

        fakultas:
        document.getElementById("fakultas").value
    };

    simpanLocalStorage();

    tampilData();

    resetForm();

    indexEdit = -1;

    alert("Data berhasil diupdate!");
}

function hapusMahasiswa(index){

    let konfirmasi =
    confirm("Yakin ingin menghapus data?");

    if(konfirmasi){

        mahasiswa.splice(index, 1);

        simpanLocalStorage();

        tampilData();
    }
}

function resetForm(){

    document.getElementById("nim").value = "";

    document.getElementById("nama").value = "";

    document.getElementById("jurusan").value = "";

    document.getElementById("fakultas").value = "";
}

function simpanLocalStorage(){

    localStorage.setItem(
        "dataMahasiswa",
        JSON.stringify(mahasiswa)
    );
}