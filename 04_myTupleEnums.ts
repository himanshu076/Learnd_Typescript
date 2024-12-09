// const user4: (string | number)[] = [1, "hc"]
let tUser4: [string, number, boolean]

// tUser4 = ["hc", 131, true]
tUser4 = ["hc", 131, true]

let rbg: [number, number, number] = [255, 1234, 112]

type User4 = [number, string]

const newUser: User4 = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true)   // now it not possile but earlier it is possible.

