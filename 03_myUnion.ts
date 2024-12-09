let score: number | string | boolean = 33

score = 44
score = "55"
score = true


type User3 = {
  name: string;
  id: number
}

type Admin = {
  userName: string;
  id: number
}

// Union
let hitesh: User3 | Admin = { name: "hitesh", id: 334}
hitesh = { userName: "hc", id: 334}

// function getDbId(id: number | string){
//   // making some API calls
//   console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string){
  // making some API calls
  if (typeof id === "string") {
    id.toLowerCase()
  }

}

// array

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number | boolean)[] = ["1","2",3, true]
const data4: any[] = ["1","2",3, true]   // not a good idea instead use strict type

let pi:3.14 = 3.14;
pi = 3.14;

let setAllotment: "aisle" | "middle" | "window"

setAllotment = "aisle"
// setAllotment = "crew"   // not assignable because different type
