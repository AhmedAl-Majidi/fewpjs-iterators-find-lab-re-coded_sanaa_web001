const testVar = {}

function testFunc() {
  return "hi"
}

// const superbowlWin = (arr) => {
//   const fn = () => {
//     for (element of arr){
//     if (x.result === "W") {
//       console.log("W");
//     } else {}
//   }
//   }
//
// }

const superbowlWin = (arr) => arr.find(ele => ele.result === "W")
