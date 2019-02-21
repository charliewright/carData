import {cars} from "./cars.js"
import {uniqueModel, uniqueMake } from "./utils.js"
import {renderCarStats} from "./renderCar.js"
import {renderCarSpreadsheet} from "./renderCarSpreadsheet.js"

//in case you want to render stuff based on url params
// let make = getURLParameter("make");

//These are my recommended cars
let toyotas = uniqueModel(cars.filter((car => car.Make == "Toyota"))).splice(7,3);
let toyotaImages = toyotas.map((car) => $(`<img class="recommended-car-image" src="_assets/${car.Model.replace(" ", "").toLowerCase()}.jpg" width="200px"/>`).text(car.Model).click(()=> renderCarStats(car)));
$(".cars-list").append($("<div/>").append(toyotaImages));



let brandList = uniqueMake(cars).map(car => car.Make)
let options = brandList.map(brand => $(`<option value="${brand}">${brand}</option>`))
$("#make-select").append(options).change( function () {
    let brandFromSelectbox = $(this).val(); 
    renderCarSpreadsheet(cars.filter((car => car.Make == brandFromSelectbox)));

    
} )


