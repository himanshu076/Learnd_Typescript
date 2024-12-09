const score: Array<number> = []
const names: Array<number> = []

function identityOne(val: boolean | number): boolean | number{
  return val
}

// this is not a good idea to use "any" instead use "Type".
function identityTwo(val: any): any{
  return val
}

// in this case using "Type" which is any type and taking any value but return only number autometicaly if vslue is num & if value is string then it returns string type automaticaly.
function identityThree<Type>(val: Type): Type {
  return val
}

identityThree(3);
identityThree("hitesh");
identityThree(true);

// it is a shorter version of above Type.
function identityFour<T>(val: T): T {
  return val
}

interface Bootle{
  brand: string,
  type: string,
}

// This is generic so we can create own types.
// identityFour<Bootle>({})

// as it is type of array then we can not return single value like "3" instead need to return at leat a part of an arrray.
function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3
  return products[myIndex]
}

// here <T,> the use of comma is indicate that it is not a JSX syntex rather a syntex for generic specifically in React.
const getMoreSearchProducts = <T,>(productds: T[]): T => {
  // do some database operations
  const myIndex = 4
  return productds[myIndex ]
}

// ------------------------------------------------------- //
interface Database {
  connection: string,
  username: string,
  password: string,
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
  return {
    valOne,
    valTwo
  }
}

// anotherFunction(3, {});

interface Quiz{
  name: string,
  type: string,
}

interface Course{
  name: string,
  author: string,
  subject: string,
}

class Sellable<T>{
  public cart: T[] = []

  addToCart(product: T){
    this.cart.push(product)
  }
}

