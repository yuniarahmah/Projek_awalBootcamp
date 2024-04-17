// variable (variabel merupakan wadah untuk nilai atau angka.bisa juga untuk text namun harus diberi tanda petik)
let angka = 156
let text = "hallo"
let bool = true

console.log(text);
text = text + " world!"
console.log(text);
//Soal
let a = 1;
let b = 8;
let c;

c=a
a=b
b=c

console.log(a)
console.log(b)
 
//aritmatika
console.log("perkalian 2: " + 2 * 2 );
console.log("pembagian 2: " + 2 / 2);
console.log("penjumlahan 2:" + (2 + 2));
console.log("pengurangan 2:" + (2 -2));
//perbandingan
console.log(4 > 2);
console.log(3 < 4);
console.log(8 === 8);
console.log(6 <= 7);
//object
let orang = {
    Nama: "Budi",
    Umur: 15,
};

let rumah ={
    Penghuni: orang,
    Alamat: "Semarang",
    Luas: 40,
};
    
console.log(rumah);
console.log(orang.umur);
//array
let siswa =[
    {nama: "Budi", nilai: 76, nomorabsen: 1},
    {nama: "Anto", nilai: 80, nomorabsen: 2},
    {nama: "Siti", nilai: 83, nomorabsen: 3}
]
siswa.push(
    { nama:"Andi", nilai:90, nomerAbsen: 4}
);
console.log(siswa)
if (4 > 2) {
    console.log("benar");
 } else if (4 < 2) {
    console.log("benar kedua");
 } else{
    console.log("salah semua")
 }
 for(let i = 1; i <= 5; i = i + 1) {
    console.log(i);
 }
 siswa.forEach((siswa) => console.log(siswa.nama));
 //soal
 //hitung total nilai siswa
 //hitung rata rata nilai siswa
  
 let total = 0;
 siswa.forEach((siswa) =>{
    total = total + siswa.nilai;
    console.log(siswa.nilai)
 });
 let ratarata; total / siswa.length;

 console.log(total);
 console.log(ratarata);
 //function
 let persegipanjang ={
    panjang: 7,
 lebar: 12,
 };
 
 function luaspersegi(persegi) {
    console.log(persegi.panjang * persegi.lebar);
 }
 luaspersegi(persegipanjang);


 function luaslingkaran (diameter) {
let jarijari = diameter / 2
console.log(3.14 * jarijari * jarijari);
 }
 luaslingkaran(65);
 luaslingkaran(90);
 //soal
 function luassegitiga(tinggi,alas) {
let L = alas * 1/2 * tinggi
console.log(L)
 }
 luassegitiga(10,8)
 function luaspersegi(panjang,lebar) {
    let L = panjang * lebar
    console.log(L)
 }
luaspersegi(15,20)
function kelilingsegitiga(a,b,c) {
let hasil = a + b + c
console.log(hasil)
}
kelilingsegitiga(5,6,3)
//modulus
console.log(15 % 4)
function cekGenap(angka) {
    if (angka % 2 === 0)
  console.log("iya");
else 
console.log("salah");
}

cekGenap(6)
cekGenap(9)
cekGenap(65)
cekGenap(1245)