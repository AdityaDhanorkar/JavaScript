class User{
    constructor(useName,PassWord){
        this.useName=useName;
        this.PassWord=PassWord;
    }
    get useName(){
        return this._useName.toUpperCase();
    }
    set useName(value){
        this._useName=value;
    }
    get PassWord(){
        return`${this._Password}Aditya`
    }
    set PassWord(value){
        this._Password=value;
    }
}

const chai = new User("Aditya","raghu")
console.log(chai.useName);
console.log(chai.PassWord);
