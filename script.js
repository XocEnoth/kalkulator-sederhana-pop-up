// Menanyakan jenis operasi
let operasi = prompt("Masukkan jenis operasi : (+) (-) (*) (/)");


// Jika operasi itu benar (+ - * /)
if (operasi == "+" || operasi == "-" || operasi == "*" || operasi == "/") {
    var angka1 = parseInt(prompt("Masukkan angka ke-1"));

    // Jika angka ke-1 itu tidak valid
    if (isNaN(angka1)) {
        alert("Anda memasukkan angka yang tidak valid");
    } // Jika angka ke-1 itu valid
      else{
        var angka2 = parseInt(prompt("Masukkan angka ke-2"));
        // Jika angka ke-2 itu tidak valid
        if (isNaN(angka2)) {
            alert("Anda memasukkan angka yang tidak valid");
        } // Jika angka ke-2 itu valid
          else{
            // Masuk ke kalkulator
            if (operasi == "+") {
                let hasil = angka1+angka2;
                alert(angka1+" + "+angka2+" = " +hasil);
            } else if (operasi == "-"){
                let hasil = angka1-angka2;
                alert(angka1+" - "+angka2+" = " +hasil);
            } else if (operasi == "*"){
                let hasil = angka1*angka2;
                alert(angka1+" * "+angka2+" = " +hasil);
            } else if (operasi == "/"){
                if (angka2 == 0) {
                    alert(angka1+" / "+angka2+" = ∞");
                } else {
                    let hasil = angka1/angka2;
                    alert(angka1+" / "+angka2+" = " +hasil);
                }
                // let hasil = angka1/angka2;
                // alert(angka1+" / "+angka2+" = " +hasil);
            }
        }
    }
} // Jika operasi yang di input salah
  else {
    alert("Anda memasukkan jenis operasi yang salah!");
}