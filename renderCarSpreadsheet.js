import {formatCurrency} from "./utils.js"

// "Make"
// "Model"
// "MSRP"
// "Year"
// "Engine Fuel Type"
// "Engine HP"
// "Engine Cylinders"
// "Transmission Type"
// "Driven_Wheels"
// "Number of Doors"
// "Market Category"
// "Vehicle Size"
// "Vehicle Style"
// "highway MPG"
// "city mpg"
// "Popularity"


export const renderCarSpreadsheet = (cars) => {

    let createCarInfo = (car) => {
        return $(`<button type="button" class="list-group-item list-group-item-action">${car.Model} | ${car["Engine Cylinders"]} Cylinder | ${car["Number of Doors"]} Door | ${car["Driven_Wheels"]} | $${car["MSRP"]} MSRP </button>`);
    }
    
    let carSpreadsheet = $(`<div class="list-group"/>`).append(cars.map(createCarInfo));

    $(`.car-spreadsheet`).empty().append(carSpreadsheet);
}