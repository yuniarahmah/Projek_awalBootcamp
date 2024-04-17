// // soal
// for (let i = 1; i <= 50; i++)
//  if (i % 2 !== 0) {
//      console.log("angka " + i + " genap warnanya merah");
// }
// else if (i % 2 === 0) {
//   console.log ("angka " + i +  " ganjil warnanya biru"); 
// }

//   const daftar = [4, 9, 2, 12, 3, 9, 6];
//     console.log(12)
//   let terbesar =0;
// for (let i = 0; i < daftar.length; i++) 
//     if(daftar[i] > terbesar) {
//       terbesar = daftar[i];
//     }
//     console.log(daftar[4])
// function kelilinglingkaran (radius) {
// console.log( 2 * 3.14 * radius);
// }
// kelilinglingkaran(10)

//  // buat untuk fungsi menghitung keliling trapesium sama kaki
// // gunakan rumus pitagoras untuk menemukan sisi samping dan
// // untuk menghitung keliling
// // gunakan Math.pow(5, 2), dan Math.sqrt() untuk menghitung akar dari angka
// function kelilingTrapesium(atas, bawah, tinggi) {
//   let v = ((bawah - atas) / 2);
//   let c2 = Math.pow(v,2) + Math.pow(tinggi, 2)
//   let y = Math.sqrt(c2)
//   let r = y + y + atas + bawah + tinggi

// console.log(r)
// }
// kelilingTrapesium( 5, 8, 7)

//  for (let i = 0; i < 30; i++) {

//  } 
// for (let i = 0; i <= 30; i = i + 3) {
//   console.log(i);
//   if(i % 3 == 0) {
//     console.log("hallo");
//   }
//   else {
//     console.log(i);
//   }
// }
// let buah =["pisang", "apel", "semangka", "salak",
//  "jeruk", "manggis"];
//  buah.push("tomat")
//  buah.reverse();
//  console.log(buah);
// //  buat menu pilihan 1 sampai 3

// // simpan hasil dari promt itu ke variabel
// // jika user memilih 1, maka program akan meminta radius untuk menghitung volume bola
// // jika user memilih 2 maka program akan meminta rusuk untuk menghitung volume kubus
// // jika user memilih 3 maka program akan meminta radius dan tinggi untuk menghitung volume
let thp1 = prompt(`
Silahkan pilih menu berikut :
1. hitung volume Bola.
2. hitung volume Kubus.
3. hitung volume Tabung.`
)
 switch (thp1){
 case '1':
  Bola(prompt(`1.Hitung Volume Bola`));
  break;
  case '2':
   Kubus(prompt(`2.Hitung Volume Kubus`));
    break;
  case '3':
  Tabung(prompt(`3.Hitung Volume Tabung`),
   prompt(`3.maka Volome Tabung`));
    break;
  default: 
alert(`ERROR`)
  break;
 }
  function Bola (radius){
    let t =3.14 * radius * radius * radius
    alert(t)
  }
 function Kubus (rusuk){
  let y =rusuk * rusuk * rusuk
  alert(y)
 }
 function Tabung (r, t){
   let T = (3.14) * r * r * t 
   alert(T)
}