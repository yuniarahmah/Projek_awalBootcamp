// let twoDArray = [
//     [12, 8, 7, 8, 9],
//     [5, 7, 3, 10, 11],
//     [9, 6, 1, 2, 11, 10],
//     [14, 5, 7, 4, 1, 0],
//   ];
//   let hasilGenap= [];
//   let hasilGanjil= [];
//   for (let v = 0; v < twoDArray.length; v++) {
//       let totalGanjil = 0;
//       let totalGenap= 0;
//       for (let o = 0; o < twoDArray[v].length; o++) {
//           let nilai= twoDArray[v][o]
//           if (nilai % 2 === 0) {
//               totalGenap += nilai;
//           } else if(nilai % 2 !== 0){
//               totalGanjil += nilai ;
//           }
//       }
//       hasilGenap.push(totalGenap);
//       hasilGanjil.push(totalGanjil)
//   }
  
//   console.log(hasilGanjil);
//   console.log(hasilGenap); 
 
 
//   let twoDAarray = [
//     [12, 8, 7, 8, 9],
//     [5, 7, 3, 10, 11],
//     [9, 6, 1, 2, 11, 10],
//     [14, 5, 7, 4, 1, 0],
//   ];
//   let total = 0;
//   for(let i = 0; i < twoDArray.length; i++){
//       for( let u = 0; u < twoDArray[i].length; u++){
//           total += twoDAarray[i][u]
//         }
       
//     }
//     console.log(total);
    console.log('latihan 1')

      for( let i = 0; i <= 10 ; i++) {
        console.log(i)
      } 
      
console.log('latihan 2')

      for(let u = 1; u <= 20; u++){
    console.log(u * u)
    
}

console.log('latihan 3')
      for(let u = 1; u <= 10; u++){
       console.log(u * u)
    }

console.log('latihan 4')
let lastnum = 0;
let value = 1;
for (let i =0; i< 10; i++){
    let temp = lastnum;
    console.log(value);
    lastnum = value ;
    value = temp + value;
}

console.log('latihan 5')

for( let i = 1; i <= 10 ; i++) {
  console.log(-i)
} 

console.log('latihan 6')

for (let i = 1; i <= 10; i++){
    let nilai = i;
    if(nilai % 2 === 1){
        nilai = nilai * -1
    }
 console.log(nilai) 
} 
console.log('latihan 7')
for( let i = 20; i > 10 ; i--){
console.log(i)
}