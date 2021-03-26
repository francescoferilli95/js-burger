/**
 * 
 *  TASK
 *  1. CALCULATE THE PRICE OF THE SELECTED BURGER WITH ADDS
 *  2. APPLY DISCOUNT IF NEEDED
 *  3. CREATE EVENT ON CLICK ON SPAN "ADD" 
 * 
/**/

// VARIABLES

var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName('ingredient-add');

// LIST OF ACCEPTED COUPONS

var coupons = ['12354ABCDEF', '98767OIUYUY' , '64827PLAKFI'];





/**
 * 
 * CREATING CLICK EVENT ON SPANN "ADD"
 * 
/**/

for(var i = 0; i < addBtn.length; i++) {
    var add = addBtn[i];

    add.addEventListener('click', function(){
        // REMINDER TO "THIS"
        // console.log(this);
        // console.log(this.previousElementSibling);

        var thisCheckbox = this.previousElementSibling;
        thisCheckbox.checked = ! thisCheckbox.checked;
    });
}





/**
 * 
 * EVENTS TO CALCULATE FULL PRICE
 * 
/**/

// ADDING EVENT LISTENER TO VARIABLE BTN

btn.addEventListener('click', function(){
    var name = burgerName.value.toLowerCase().trim();
    // console.log(name);

    // MUST HAVE BURGER NAME TO CALCULATE PRICE

    if(name.length === 0) {
        alert('Please enter a valid Burger Name to proceed');
    } else {

        // PRICE START VALUE
        var price = 50;

        // LOOP TO CALCULATE PRICE BASED ON ADDS

        for( var i = 0; i < ingredients.length; i++) {

            var ingredient = ingredients[i];
            //console.log(ingredient.checked);
            //console.log(ingredient.value);

            //CHECK OF EACH INGREDIENT
            if(ingredient.checked) {
                //console.log(ingredient.value);

                price += parseInt(ingredient.value);
            }
        }

        // PRINT IN CONSOLE THE FULL PRICE
        // console.log(price);


        // ADDING DISCOUNT TO FULL PRICE

        var couponCode = coupon.value;
        // console.log(couponCode);

        if(coupons.includes(couponCode)) {
            // console.log('You\'ve entered a valid Coupon Code!');

            // COUPON = 10% DISCOUNT
            price -= price * 0.1;
        }


        // PRINT IN HTML THE FULL PRICE
        displayPrice.innerHTML = price.toFixed(2);
    }
});