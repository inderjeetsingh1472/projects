let str = "ISD";
let binaryString = "";
for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i).toString(2); // Convert Unicode value to binary
    binaryString += charCode.padStart(8, '0') + " "; // Add padding to make it 8 bits
}
console.log(binaryString);