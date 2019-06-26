const LatLangData = [
    {
        label: 'Office',
        coordinates: [
            {latitude: 23.754061, longitude: 90.374839 },
            {latitude: 23.754127, longitude: 90.375053 },
            {latitude: 23.753930, longitude: 90.375115 },
            {latitude: 23.753886, longitude: 90.374938 }
        ]
        
    },
    {
        label: 'Shukrabad',
        coordinates: [
            { latitude: 23.752644, longitude: 90.377253  },
            { latitude: 23.752753, longitude: 90.377554  },
            { latitude: 23.752216, longitude: 90.377861  },
            { latitude: 23.752098, longitude: 90.377552  },
        ]
    },
    {
        label: 'Nilkhet',
        coordinates: [
            { latitude: 23.732573, longitude: 90.384697 },
            { latitude: 23.732676, longitude: 90.385203 },
            { latitude: 23.731904, longitude: 90.385473 },
            { latitude: 23.732197, longitude: 90.384891 }
        ]
    },
    {
        label: 'Maternal and Child Health Training Institute',
        coordinates: [
            { latitude: 23.724163, longitude: 90.386945 },
            { latitude: 23.724224, longitude: 90.387226 },
            { latitude: 23.723856, longitude: 90.387356 },
            { latitude: 23.723757, longitude: 90.387133 }
        ]
        
    },
    {
        label: 'Home',
        coordinates: [
            { latitude: 23.723356, longitude: 90.380682 },
            { latitude: 23.723310, longitude: 90.380969 },
            { latitude: 23.723163, longitude: 90.380945 },
            { latitude: 23.723202, longitude: 90.380686 }
        ]
    }
    
    
]

const InitialRegion =  {
    latitude: 23.737491688954222, 
    longitude: 90.38608169183135,
    latitudeDelta: 0.07257755845785141,
    longitudeDelta: 0.048720673419413885,
}

/* Testing */
// var currentCord = {latitude: 23.732337289745598, latitude: 90.38504753261805}
// var cord = [
//     { latitude: 23.732573, longitude: 90.384697 },
//     { latitude: 23.732676, longitude: 90.385203 },
//     { latitude: 23.731904, longitude: 90.385473 },
//     { latitude: 23.732197, longitude: 90.384891 }
// ]

// function GetArrayValue(items, key){
// 	var arrVal = [];
// 	for(var i = 0; i < items.length; i++){
//     	var elem = items[i];
// 		arrVal.push(elem[key])
// 	}
// 	return arrVal;
// }

// var latitudeList = GetArrayValue(cord, 'latitude');
// var longitudeList = GetArrayValue(cord, 'longitude');

// function minMax(items) {
//     return items.reduce((acc, val) => {
//         acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
//         acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
//         return acc;
//     }, []);
// }

// var latitudeMinMaxList = minMax(latitudeList);
// var longitudeMinMaxList = minMax(longitudeList);

// function findInRange(range, value){
// 	var hasInRange = false;
// 	var minValue = range[0];
// 	var maxValue = range[1];

// 	if(value >= minValue && value <= maxValue){
// 		hasInRange = true;
//     }
// 	return hasInRange;
// }

// var isLat = findInRange(latitudeMinMaxList, currentCord.latitude);
// var isLong = findInRange(longitudeMinMaxList, currentCord.longitude);

// console.log(isLat && isLong);
/* End Testing */

export { LatLangData, InitialRegion }