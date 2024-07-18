function User(email,PassWord){
    this.email=email;
    this.PassWord=PassWord;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(value){
            this._email=value;
        }
    })

    Object.defineProperty(this,'Password',{
        get:function(){
            return `${this._Password}Aditya`
        },
        set(value){
            this._Password=value;
        }
    })
}

const chai = new User("raghu@google.com",261);
console.log(chai);