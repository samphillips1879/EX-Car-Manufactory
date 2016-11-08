"use strict";

/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  this.manufactured_date = Date.now();
  // Create the manufactured date property (see above)
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */
function Tesla () {
  this.manufacturer = "Tesla";
  this.engineType = "Electric";
  // Define the manufacturer instance variable
}
// Set the prototype to a new Car instance
Tesla.prototype = new Car();


/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function ModelS () {
  this.model = "Model S";
  this.horsepower = 532;
  this.electricRange = "240 mi";
}
// Set the prototype to appropriate model you created above and set the model name argument
ModelS.prototype = new Tesla();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
let myFirstFavoriteCar = new ModelS();
myFirstFavoriteCar.plate_number = "1111111";
let mySecondFavoriteCar = new ModelS();
mySecondFavoriteCar.plate_number = "2222222";
let myThirdFavoriteCar = new ModelS();
myThirdFavoriteCar.plate_number = "3333333";

/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function Roadster () {
  this.model = "Roadster";
  this.horsepower = 288;
  this.electricRange = "244 mi";

}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */
Roadster.prototype = new Tesla();



/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */

let myFirstRoadster = new Roadster();
myFirstRoadster.plate_number = "BADMOFO";


let garageArray = [myFirstFavoriteCar, mySecondFavoriteCar, myThirdFavoriteCar, myFirstRoadster];
console.log("garageArray", garageArray);










