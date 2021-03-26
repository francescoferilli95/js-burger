/**
 * 
 *  TASK
 *  1. CALCULATE THE PRICE OF THE SELECTED BURGER WITH ADDS
 *  2. APPLY DISCOUNT IF NEEDED
 *  3. CREATE EVENT ON CLICK ON SPAN ADD 
 * 
/**/

// VARIABLES

var btn = document.getElementById('button');
var burgerName = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
var displayPrice = document.getElementById('price');



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

        // PRINT IN HTML THE FULL PRICE
        displayPrice.innerHTML = price.toFixed(2);
    }
});