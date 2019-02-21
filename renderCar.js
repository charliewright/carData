import {formatCurrency} from "./utils.js"

export const renderCarStats = (car) => {

    const stats = {
        //driving
        kmPerWeek: 400,
        maintenancePerYear: 2000,
        gasPrice: 1.25,
        insurance: 80,
        //car
        fuelEconomy: 2.35/car["highway MPG"],
        purchasePrice: car.MSRP,
        yearlyDepreciation: .12,
    }

    let fuelCost = parseInt(stats.kmPerWeek * 52 * stats.fuelEconomy * stats.gasPrice);

    let oneYearDepreciation = parseInt(car.MSRP * .48)/ 5;

    let yearlyCost = fuelCost + stats.insurance * 12 + stats.maintenancePerYear + oneYearDepreciation ; // todo add depreciation into the mix


    let blurb = $("<h2/>").text(`${car.Make} ${car.Model}`);

    let gas = $("<div/>").append($("<span/>").text(`gas: ${formatCurrency(fuelCost)}`));

    let maintenance = $("<div/>").append($("<span/>").text(`maintenance: ${formatCurrency(stats.maintenancePerYear)}`));

    let depreciation = $("<div/>").append($("<span/>").text(`depreciation: ${formatCurrency(oneYearDepreciation)}`));

    let insurance = $("<div/>").append($("<span/>").text(`insurance: ${formatCurrency(stats.insurance * 12) }`));

    let total = $("<div/>").append($("<span/>").text(`total: ${formatCurrency(fuelCost + stats.maintenancePerYear + oneYearDepreciation + stats.insurance)}`));

    let button =  $(`<a class="btn btn-primary btn-lg" href="#" role="button">Great! How do I buy a car?</a>`);

    $(".car-details").empty().append(blurb, gas, maintenance, depreciation, insurance, total, button);
}