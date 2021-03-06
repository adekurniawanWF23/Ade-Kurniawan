/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
*/

function digitPerkalianMinimum(angka) {
  var hasilKali;
  var angkaFaktor;
  var arrJumlahDigit = [];
  
  for (var a = 1; a <= angka; a++) {
    for (var b = 1; b <= angka; b++) {
      hasilKali = a * b;
      if (hasilKali === angka) {
        angkaFaktor = String(a) + String(b);
        arrJumlahDigit.push(Number(angkaFaktor));
      }
    }
  }
  arrJumlahDigit.sort(function(value1, value2) { return value1 > value2 });
  return arrJumlahDigit[0].toString().length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
