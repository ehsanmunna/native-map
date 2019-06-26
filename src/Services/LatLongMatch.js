
function GetArrayValue(items, key){
	var arrVal = [];
	for(var i = 0; i < items.length; i++){
    	var elem = items[i];
		arrVal.push(elem[key])
	}
	return arrVal;
}

function minMax(items) {
    return items.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
        acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
        return acc;
    }, []);
}

function findInRange(range, value){
	var hasInRange = false;
	var minValue = range[0];
	var maxValue = range[1];

	if(value >= minValue && value <= maxValue){
		hasInRange = true;
    }
	return hasInRange;
}

const GetCordination = (cord, currentCord) => {
    //console.log('from inside', cord)
    var latitudeList = GetArrayValue(cord, 'latitude');
    var longitudeList = GetArrayValue(cord, 'longitude');
    
    var latitudeMinMaxList = minMax(latitudeList);
    var longitudeMinMaxList = minMax(longitudeList);
    
    var isLat = findInRange(latitudeMinMaxList, currentCord.latitude);
    var isLong = findInRange(longitudeMinMaxList, currentCord.longitude);

    return {a: isLat, b: isLong, c: currentCord };
}

export { GetCordination };