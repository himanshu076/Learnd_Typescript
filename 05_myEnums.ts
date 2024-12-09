// const AILSE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === AILSE) {

// }

// instead of above those use always "ENUMS".
// enum SeatChoice {
//   AILSE = 10,   // it's a choice to assign value or not. if not assigning then default value is assigned.
//   MIDDLE = 22,
//   WINDOW,
//   FOURTH = 44
// }

enum SeatChoice {
  AILSE = "AISLE",   // it's a choice to assign value or not. if not assigning then default value is assigned.
  MIDDLE = 3,
  WINDOW,
  FOURTH
}

// We can use it with const for less transpile code.
const enum SeatChoice2 {
  AILSE = "AISLE",   // it's a choice to assign value or not. if not assigning then default value is assigned.
  MIDDLE = 3,
  WINDOW,
  FOURTH
}

const hcSeat = SeatChoice.AILSE