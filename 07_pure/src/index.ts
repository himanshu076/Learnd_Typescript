class User {
  public email: string
  private name: string
  readonly city: string = "Jaipur"
  constructor(email: string, name: string){
    this.email = email,
    this.name = name
    this.city

  }
}

class User2 {

  protected _courseCount = 1
  readonly city: string = "Jaipur"

  constructor(
    public email: string,
    public name: string,
    // private userId: string,
  ){
    this.email = email,
    this.name = name
    this.city

  }

  // this is private method that does not allowed.
  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string{
    return `apple ${this.email}`
  }

  get courseCount(): number{
    return this._courseCount
  }

  // in settoer case there no any return
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNum
  }
}

class SubUser extends User2 {
  isFamily: boolean = true
  changeCouresCount(){
    this._courseCount = 4
  }
}


const hitesh = new User("h@h.com", "hiesh")
// hitesh.city = 4