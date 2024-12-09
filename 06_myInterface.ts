interface User {
  readonly dbId: number
  email: string,
  userId: number,
  googleId?: string   // optional field if use "?".
  // startTrial: () => string   // first way to create function
  startTrial(): string,   // second way to create function
  getCoupon(couponName: string, value: number): number
}

interface User {
  githubToken: string
}

interface Admin extends User {
  role: "admin" | "ta" | 'learner'
}

const hitesh: Admin = {dbId: 22, email: "h@hitesh.com", userId: 123,
  githubToken: "g",
  role: "admin",
  startTrial: () => {
    return "trial started"
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10
  }
}

hitesh.email = "h@hc.com"
// hitesh.dbId = 334




// interface different from types because of following
// 1. we can reOpen it - means can create new one with same name that added additional parameters.
// 2. we can inherate it
