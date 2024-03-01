///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(`$${summedPrice}`)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

calcFinalPrice = (carTotal, couponValue, tax) => carTotal * (1 + tax) - couponValue


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    UUID:
        number, 
        unique identifier for each customer, 
        for identification, 
        metrics
    first name: 
        String, 
        Separate from the last name for templating
        for delivery 
        automated communications
        identification
    last name: 
        String, 
        Separate from the last for templating 
        automated communications and 
        identification
    email: 
        String,
        automated communications and 
        identification 
        password reset
    Phone: 
        number 
        11 digits 
        for identification 
        password reset 
        automatic communications.
    house number: 
        number 
        postal service requires house numbers only contain numbers, 
        easier to verify input 
        for delivery
        mail communications
    street address: 
        string 
        for delivery
        mail communications
    apt: 
        string, 
        may include a combination of letters and numbers 
        for delivery
        mail communications
    city: 
        string, 
        for delivery
        mail communications
        metrics
    state: 
        string, 
        for order shipping
        mail communications
        metrics
    zip code: 
        number 
        for order shipping
        mail communications
        metrics
    average purchase price:
        number
        for personalized recommendations
        metrics
    purchase history: 
        array of array of objects 
        a list of all purchases[array] that include each item{object} for that purchase, the total price, and the date and time of the purchase 
        each item object will contain the name of the item, the price of the item, and the quantity of the item and how many times the item has been purchased.
        for personalized recommendations
        up selling
        metrics
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@server.com",
    phone: 12345678901,
    houseNumber: 123,
    streetAddress: "123 Main St",
    apt: "Apt 123",
    city: "Phoenix",
    state: "AZ",
    zipCode: 12345,
    averagePurchasePrice: 26.97,
    purchaseHistory: [
        {
            items: [
                    {
                        name: "pizza", 
                        price: 9.99, 
                        quantity: 1,
                        timesPurchased: 2
                    }, 
                    {
                        name: "pasta", 
                        price: 8.99, 
                        quantity: 1,
                        timesPurchased: 1
                    },
                    {
                        name: "salad", 
                        price: 7.99, 
                        quantity: 1,
                        timesPurchased: 1
                    }

                ],
            total: 26.97,
            date: "2021-01-01T12:00:00"
        },
        {
            items: [
                {
                    name: "pizza", 
                    price: 9.99, 
                    quantity: 1,
                    timesPurchased: 3
                }, 
                {
                    name: "pasta", 
                    price: 8.99, 
                    quantity: 1,
                    timesPurchased: 2
                },
                {
                    name: "salad", 
                    price: 7.99, 
                    quantity: 1,
                    timesPurchased: 2
                }

            ],
            total: 26.97,
            date: "2022-02-02T12:00:00"
        },
    ]
}
