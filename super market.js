// Create Three Variables
let itemNames = ["Rice", "Sugar", "Milk", "Bread", "Oil", "Tea", "Salt", "Flour", "Daal", "Chicken", "Eggs", "Yogurt", "Butter", "Cheese", "Biscuits", "Chips", "Cold Drink", "Water", "Soap", "Shampoo", "Toothpaste", "Brush", "Pasta", "Noodles", "Ketchup", "Mayo", "Jam", "Honey", "Coffee", "Juice", "Ice Cream", "Cake", "Chocolate", "Apple", "Banana", "Orange", "Mango", "Potato", "Onion", "Tomato", "Ginger", "Garlic", "Chilli", "Lemon", "Coriander", "Cumin", "Pepper", "Turmeric", "Cardamom", "Dettol"]

let itemPrice = [200, 150, 180, 20, 500, 300, 40, 120, 250, 600, 360, 200, 400, 550, 100, 80, 120, 50, 90, 250, 120, 60, 180, 90, 350, 400, 300, 800, 450, 200, 500, 700, 150, 100, 80, 120, 200, 60, 150, 80, 200, 150, 100, 40, 50, 100, 300, 120, 400, 130]

let payment = []

// Show Messages
alert("Welcome! to Talha's Supermarket");
console.log("<--------Menu of Super Market------------>");

// print Item of Supermarket
for (let i = 0; i < itemNames.length; i++) {
    console.log(`${i + 1}.${itemNames[i]} -----------> ${itemPrice[i]}Rs`);
}

// User Input Quantity and Other thins
let getBill = false;
while (getBill === false) {
    choice = prompt("What do you want to buy? OR Bill");

    if (choice === "bill") {
        getBill = true
    }else if (Number(choice) >= 1 && Number(choice) <=50 ) {
        let itemIndex = Number(choice) - 1;
        let quantity = Number(prompt(`Enter Your Quantity of ${itemNames[itemIndex]}`));

        if (quantity > 0) {
            let itemTotal = itemPrice[itemIndex] * quantity;
            payment.push(itemTotal);
            alert(`${itemNames[itemIndex]} will have added. Total = ${itemTotal}Rs`)
        } else {
            alert("You have not baught anything Plese You can go to the Market")
        }
    } else{
        alert("Invalid Item")
    }
} 

// Create Bill
function calcultaeBill(paymenArray) {
    let total = 0
    for (let i = 0; i < paymenArray.length; i++) {
        total = total + paymenArray[i];
    }
    return total;
}

let finalBill = calcultaeBill(payment);

// Discount 
if(finalBill >= 10000){
    let discount = finalBill * 0.10;
    let afterDiscount = finalBill - discount;
    alert(`FINAL BILL \nTotal =  ${finalBill}Rs \nDiscount 10% = ${discount}Rs \nPay = ${afterDiscount}Rs`);
}
else{
    alert(`FINAL BILL \nTotal = ${finalBill}Rs`);
}

alert("Thank You Bye!...");

console.log(payment);



