
// const A = prompt("Enter A"); 
// const B = prompt("Enter B"); 
// const C = prompt("Enter C"); 

// const distanceAB = Math.abs(A - B);
// const distanceAC = Math.abs(A - C);

// let EngyaqinNuqta;
// let EngyaqinMasofa;

// if (distanceAB < distanceAC) {
//   EngyaqinNuqta = 'B';
//   EngyaqinMasofa = distanceAB;
// } else {
//   EngyaqinNuqta = 'C';
//   EngyaqinMasofa = distanceAC;
// }

// console.log(`A nuqtaga eng yaqin nuqta: ${EngyaqinNuqta}`);
// console.log(`A va ${EngyaqinNuqta} orasidagi masofa: ${EngyaqinMasofa}`);





// let A = parseFloat(prompt("A sonini kiriting:"));
// let B = parseFloat(prompt("B sonini kiriting:"));
// let amal = parseInt(prompt("Amalni tanlang (1: Qo'shish, 2: Ayirish, 3: Bo'lish, 4: Ko'paytirish):"), 10);

// switch (amal) {
//     case 1:
//         console.log(`Qo'shish natijasi (A + B): ${A + B}`);
//         break;
//     case 2:
//         console.log(`Ayirish natijasi (A - B): ${A - B}`);
//         break;
//     case 3:
//         if (B !== 0) {
//             console.log(`Bo'lish natijasi (A / B): ${A / B}`);
//         } else {
//             console.log("Xato: 0 ga bo'lish mumkin emas!");
//         }
//         break;
//     case 4:
//         console.log(`Ko'paytirish natijasi (A * B): ${A * B}`);
//         break;
//     default:
//         console.log("Noto'g'ri amal tanlandi. Iltimos, 1, 2, 3 yoki 4 ni tanlang.");
//         break;
// }






// const element = parseFloat(prompt('Element turi (1: radius, 2: diametr, 3: uzunlik, 4: yuzasi)')); 
// const qiymat = parseFloat(prompt('Element qiymati: ')); 
// const pi = 3.14;

// let radius, diameter, uzunlik, yuzasi;

// switch (element) {
//   case 1:
//     radius = qiymat;
//     diameter = 2 * radius;
//     uzunlik = 2 * pi * radius;
//     yuzasi = pi * radius ** 2;
//     break;
//   case 2:
//     diameter = qiymat;
//     radius = diameter / 2;
//     uzunlik = 2 * pi * radius;
//     yuzasi = pi * radius ** 2;
//     break;
//   case 3:
//     uzunlik = qiymat;
//     radius = uzunlik / (2 * pi);
//     diameter = 2 * radius;
//     yuzasi = pi * radius ** 2;
//     break;
//   case 4:
//     yuzasi = qiymat;
//     radius = Math.sqrt(yuzasi / pi);
//     diameter = 2 * radius;
//     uzunlik = 2 * pi * radius;
//     break;
//   default:
//     console.log('Noto‘g‘ri element turi');
// }

// console.log(`Radius: ${radius}`);
// console.log(`Diametr: ${diameter}`);
// console.log(`Uzunlik: ${uzunlik}`);
// console.log(`Yuzasi: ${yuzasi}`);







// const a = parseFloat(prompt('kub tomonini kiriting: '));

// const hajm = a ** 3;
// const yuzasi = 6 * a ** 2;

// console.log(`Kub hajmi: ${hajm}`);
// console.log(`Kub yuzasi: ${yuzasi}`);






// let x = parseFloat(prompt('X qiymatini kiriting: '));
// let y = parseFloat(prompt('Y qiymatini kiriting: '));

// if(x>=1 && x<=8 && y>=1 && y<=8){
//   if((x+y)/2===0){
//     console.log(`(${x}, ${y}) maydon oq`);
    
//   }
// else{
//     console.log(`(${x}, ${y}) maydon qora`);
    
// }

// }
// else{
//     console.log('Noto‘g‘ri qiymat kiritildi');
// }