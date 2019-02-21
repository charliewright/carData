let uniqueModel = (list) => {
    let seen = {};
    return list.filter(function(item) {
        let modelName = item.Model;
        return seen.hasOwnProperty(modelName) ? false : (seen[modelName] = true);
    })
}

let uniqueMake = (list) => {
    let seen = {};
    return list.filter(function(item) {
        let makeName = item.Make;
        return seen.hasOwnProperty(makeName) ? false : (seen[makeName] = true);
    })
}

let getURLParameter = (name) => {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

let formatCurrency = (amount) => {
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	let s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
    if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
    if(s.length == 8) {
        s = s.split("");
        s[2] = "," + s[2];
        s = s.join("");
    }
	return  "$" + s;
}

export {uniqueModel, uniqueMake, getURLParameter, formatCurrency}