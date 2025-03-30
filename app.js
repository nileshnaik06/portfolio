// // linear search in an array
// let prompt = require("prompt-sync")()
// let arr = [1, 2, 3, 4, 5]
// let target = Number(prompt("Enter a number "));
// let idx = -1
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == target) {
//     idx = i;
//     break
//   }
// }
// if (idx == -1) console.log("Element not found");
// else console.log(`found at ${idx}`);



// let arr=[1,4,3,2,9,10]

// for (let i = 1; i < arr.length; i++) {
//   let key=arr[i];
//   j= i-1

//   while (j>=0 && arr[j] > key) {
//     arr[j+1] = arr[j]
//     j--;
//   }

//   arr[j+1]=key
  
// }

// process.stdout.write(arr+"")

let vid = document.querySelectorAll("video")

vid.forEach((video)=>{
  video.addEventListener("click",()=>{
    window.open("https://nileshnaik06.github.io/My-first-project/")
  })
})
