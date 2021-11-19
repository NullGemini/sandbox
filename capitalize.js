// function cap(string) {
//     let strArr = string
//       .split(" ").map;
    
//     strArr.forEach(str => {
//       let temp = str.split("");
//       console.log(temp);
//       temp[0].toUpperCase();
//       return temp.join("");
//     });
//     return strArr.join("");
//   }

// // console.log(cap("slow down!"));


// function cap2 (text) {
//     return text.split(" ").map( w => w[0].toUpperCase() + w.slice(1)).join(" ");
// }

// console.log(cap2("slow down, please!"));



function capitalize(string) {

  let strArr = string.split(" ");

  return strArr.map(str => {
    return str[0].toUpperCase() + str.split("").splice(1).join("");
    // console.log(str.split("").splice(1));
  }).join(" ");

  // return strArr;
}



console.log(capitalize("slow down, please!"));