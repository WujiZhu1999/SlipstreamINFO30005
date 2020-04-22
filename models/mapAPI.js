const fakeAPI = [
    {"to":"perth",
    "toID":2,
    "fromID":3,
    "from":"melbourne",
    "route":"go here then go there then go to destination"
    },
];

module.exports = fakeAPI;

//what real api will do:
//for example if I want to go from A to B
//the route should be A forward 101m get to point C then forward 101m to point B
//then the response will be like
//{
//	"1":{
//		"distance":{text:"0.1 km", value:101}
//		"duration":{text:"1 min", value:48}
//		"end_location": _.L {lat: f, lng: f}
//		  "maneuver": "turn-left"
//		"polyline": {points: "lgweFc`xsZJEvBw@`@QxQ[dA]`@o|@_@1@S"}
//		"start_location": _.L {lat: f, lng: f}
//		"travel_mode": "BYCYCLING"
//		"encoded_lat_lngs": "lgweFc`xsZJEvBw@`@Qx@[dA]`@O|@_@1@S"
//		"path": [_.L,_.L,_.L,_.L,_.L,_.L,_.L,_.L,_.L]
//		"lag_lngs": [_.L,_.L,_.L,_.L,_.L,_.L,_.L,_.L,_.L]
//		"instructions": "Turn<b>Left</b>,comes into<b>Swanston St</b>"
//		"start_point": _.L {lat:f ,lng:f}
//		"end_point": _.L {lat: f,lng: f}
//		"__proto__":Object
//	}
//	"2": ...
//}

//1 represents the first part from A to C... 