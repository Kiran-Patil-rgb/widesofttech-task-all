// class example{
//     #data = 100
//     getData(){
//         return this.#data
//     }
//     setData(){
//         this.#data += numbers
//     }
//     addnumbers(n1, n2){
//         console.log(n1 + n2)
//     }
// }
// let numbers = new example()
//     console.log(numbers.data)
//     numbers.setData(100)
//     console.log(numbers.getData())
//         numbers.addnumbers(1,2)
    
//anathor example of encapsulation//

class bankaccount{
    #balance;
    constructor(intialbalance){
        if(intialbalance >= 0){
            this.#balance = intialbalance;
        }else{
            throw new Error("initial balance cannot be negative.")
        }
    }

//public method (deposite,withdraw):the only way to modify the private date.
deposit(amount){
    if(amount > 0){
        this.#balance += amount;
        console.log(`deposited: $${amount}. new balance: $${this.#balance}`);
    }else{
        console.log("deposit amount must be positive.");
    }
}
withdraw(amount){
    if(amount > 0 && amount <= this.#balance){
        this.#balance -= amount;
        console.log(`withdraw: $${amount}. new balance: $${this.#balance}`)
    }else if(amount > this.#balance){
        console.error("insufficient funds for withdrwal.");
    }else{
        console.error("withdrwal amount must be positive.")
    }
}
 getbalance(){
    return this.#balance;
 }
}
try {
    const myAccount = new bankaccount(100);
    myAccount.deposit(50);
    myAccount.withdraw(25);
    console.log(`Current Balance: $${myAccount.getbalance()}`);
    myAccount.withdraw(500); 
    myAccount.deposit(-10);   
    myAccount.withdraw(-5); 

    const anotherAccount = new bankaccount(-100); 
} catch (e) {
    console.error(e.message);
}
