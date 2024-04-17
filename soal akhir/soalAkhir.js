console.log("contoh pengerjaan: ");
let result = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    result += "@";
  }
   result += "\n";
//    didalam rasult 
}
console.log(result);
result = "";

console.log("soal akhir java script");

console.log("1.");
let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      string += "@";
    } else {
      if (j === n - 1 || j === 0) {
        string += "@";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);

console.log("2.");

let p = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
   p += "@";
  }
  p += "\n";
}
console.log(p);

console.log("3.");
let s = "";
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    s += "@";
  }
  s += "\n";
}
console.log(s);

console.log("4.");

let o = 5;
let star = "";
for (let i = 1; i <= o; i++) {
  for (let j = 0; j < i; j++) {
    star += "@";
  }
  star += "\n";
}
for (let i = 1; i <= o - 1; i++) {
  for (let j = 0; j < o - i; j++) {
    star += "@";
  }
  star += "\n";
}
console.log(star);

console.log("5.");

let t = 5;
let low = "";
for (let i = 1; i <= t; i++) {
  for (let j = 0; j < t - i; j++) {
    low += " ";
  }
  for (let k = 0; k < i; k++) {
    low += "@";
  }
  low += "\n";
}
console.log(low);

console.log("9.")

