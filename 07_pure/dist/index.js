"use strict";
class User {
    constructor(email, name) {
        this.city = "Jaipur";
        this.email = email,
            this.name = name;
        this.city;
    }
}
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
        this.email = email,
            this.name = name;
        this.city;
    }
    // this is private method that does not allowed.
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // in settoer case there no any return
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCouresCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("h@h.com", "hiesh");
// hitesh.city = 4
