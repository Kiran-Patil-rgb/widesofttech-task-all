// class RBI {
//     creataccount(){
//         throw("cannot access this mwthod from RBI please create your own create account method")
//     }
// }

// class SBI extends RBI{
//  createaccount(){
//     console.log("this is create account from SBI class")
//  }
// }

// let account1 = new SBI()
// account1.createaccount()


//another example of abstraction//
 class PaymentProcessor {
    constructor() {
        if (this.constructor === PaymentProcessor) {
            throw new Error("Cannot instantiate abstract class 'PaymentProcessor'.");
        }
    }

    processPayment(amount) {
        throw new Error("The 'processPayment' method must be implemented.");
    }
}

class CreditCardProcessor extends PaymentProcessor {
    constructor(cardNumber, cvv) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }

    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount} for card ${this.cardNumber}.`);
        console.log("Internal: Communicating with payment gateway...");
        return true;
    }
}

class PayPalProcessor extends PaymentProcessor {
    constructor(email) {
        super();
        this.email = email;
    }

    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount} for account ${this.email}.`);
        console.log("Internal: Redirecting to PayPal's secure site...");
        return true;
    }
}


function completePurchase(paymethod, amount) {
    console.log("____starting new purchase___");
    paymethod.processPayment(amount);
    console.log("____purcahse complete____");
}


let creditcard = new CreditCardProcessor("1111-2222-3333-4444", "123");
completePurchase(creditcard, 50.00);

let paypal = new PayPalProcessor("user@example.com");
completePurchase(paypal, 75.50);

try {
    let processor = new PaymentProcessor();
} catch (e) {
    console.log(`Error: ${e.message}`);
}