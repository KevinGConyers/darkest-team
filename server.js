const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const h1 = 'hero1';
const h2 = 'hero2';
const h3 = 'hero3';
const h4 = 'hero4';

const a1 = 'ability1';
const a2 = 'ability2';
const a3 = 'ability3';
const a4 = 'ability4';

const name = 'name';
const image = "image"
const imagesrc = "imagesrc";

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
if (process.env.DARKEST_PROD == 'True'){
	var config = require('./server_config.json');
	var port = config.portnumber;
	var server_name = config.servername;

	app.listen(port, server_name, function () {
		console.log(server_name + ' listening on port: ' + port + '!')
	}); 

} else {
	app.listen(3000, function () {
		console.log('Test app listening on port 3000!')
	})

}


app.get('/', function (req, res) {
	res.render('index')
})

app.get('/about', function(req, res) {
	res.render('about');
})

app.get('/news', function(req, res) {
	res.render('news');
})

app.get('/support', function(req, res) {
	res.render('support');
})


app.post('/', function (req, res) {
	console.log("button pressed");
	params = getParamsObject(req.body);
	res.render('image_preview', params)
})



function getParamsObject(body) {
	//console.log(body);
	var hero_info = loadHeroJSON();
	var trinket_info = loadTrinketJSON();
	var params = {
		h1: {
			name: "",
			imagesrc: "",
			abilities: {
				a1: {
					name: "",
					imagesrc: ""
				},
				a2: {
					name: "",
					imagesrc: ""
				},
				a3: {
					name: "",
					imagesrc: ""
				},
				a4: {
					name: "",
					imagesrc: ""
				}
			},
			trinkets: {
				t1: {
					name: "",
					imagesrc: "",
				},
				t2: {
					name: "",
					imagesrc: "",
				}
			}
		},
		h2: {
			name: "",
			imagesrc: "",
			abilities: {
				a1: {
					name: "",
					imagesrc: ""
				},
				a2: {
					name: "",
					imagesrc: ""
				},
				a3: {
					name: "",
					imagesrc: ""
				},
				a4: {
					name: "",
					imagesrc: ""
				}
			},
			trinkets: {
				t1: {
					name: "",
					imagesrc: "",
				},
				t2: {
					name: "",
					imagesrc: "",
				}
			}
		},
		h3: {
			name: "",
			imagesrc: "",
			abilities: {
				a1: {
					name: "",
					imagesrc: ""
				},
				a2: {
					name: "",
					imagesrc: ""
				},
				a3: {
					name: "",
					imagesrc: ""
				},
				a4: {
					name: "",
					imagesrc: ""
				}
			},
			trinkets: {
				t1: {
					name: "",
					imagesrc: "",
				},
				t2: {
					name: "",
					imagesrc: "",
				}
			}
		},
		h4: {
			name: "",
			imagesrc: "",
			abilities: {
				a1: {
					name: "",
					imagesrc: ""
				},
				a2: {
					name: "",
					imagesrc: ""
				},
				a3: {
					name: "",
					imagesrc: ""
				},
				a4: {
					name: "",
					imagesrc: ""
				}
			},
			trinkets: {
				t1: {
					name: "",
					imagesrc: "",
				},
				t2: {
					name: "",
					imagesrc: "",
				}
			}
		}
	}
	let h1class = body['hero-1'];
	let h2class = body['hero-2'];
	let h3class = body['hero-3'];
	let h4class = body['hero-4'];

	let h1a1 = body['abil1-1'];
	let h1a2 = body['abil1-2'];
	let h1a3 = body['abil1-3'];
	let h1a4 = body['abil1-4'];

	let h2a1 = body['abil2-1'];
	let h2a2 = body['abil2-2'];
	let h2a3 = body['abil2-3'];
	let h2a4 = body['abil2-4'];

	let h3a1 = body['abil3-1'];
	let h3a2 = body['abil3-2'];
	let h3a3 = body['abil3-3'];
	let h3a4 = body['abil3-4'];

	let h4a1 = body['abil4-1'];
	let h4a2 = body['abil4-2'];
	let h4a3 = body['abil4-3'];
	let h4a4 = body['abil4-4'];

	let h1t1 = body['trnk1-1'];
	let h1t2 = body['trnk1-2'];

	let h2t1 = body['trnk2-1'];
	let h2t2 = body['trnk2-2'];

	let h3t1 = body['trnk3-1'];
	let h3t2 = body['trnk3-2'];

	let h4t1 = body['trnk4-1'];
	let h4t2 = body['trnk4-2'];

	//load hero one info
	params.h1[name] = h1class;
	params.h1[imagesrc] = hero_info.heroes[h1class][image];

	params.h1.abilities.a1[name] = h1a1;
	params.h1.abilities.a2[name] = h1a2;
	params.h1.abilities.a3[name] = h1a3;
	params.h1.abilities.a4[name] = h1a4;

	params.h1.abilities.a1[imagesrc] = hero_info.heroes[h1class].abilities[h1a1][image];
	params.h1.abilities.a2[imagesrc] = hero_info.heroes[h1class].abilities[h1a2][image];
	params.h1.abilities.a3[imagesrc] = hero_info.heroes[h1class].abilities[h1a3][image];
	params.h1.abilities.a4[imagesrc] = hero_info.heroes[h1class].abilities[h1a4][image];

	params.h1.trinkets.t1[name] = h1t1;
	params.h1.trinkets.t2[name] = h1t2;

	if(trinket_info.pvp.General.hasOwnProperty(h1t1)) {
		params.h1.trinkets.t1[imagesrc] = trinket_info.pvp.General[h1t1][image];
	} else {
		params.h1.trinkets.t1[imagesrc] = trinket_info.pvp[h1class][h1t1][image];
	}

	if(trinket_info.pvp.General.hasOwnProperty(h1t2)) {
		params.h1.trinkets.t2[imagesrc] = trinket_info.pvp.General[h1t2][image];
	} else {
		params.h1.trinkets.t2[imagesrc] = trinket_info.pvp[h1class][h1t2][image];
	}

	//load hero two info
	params.h2[name] = h1class;
	params.h2[imagesrc] = hero_info.heroes[h2class][image];

	params.h2.abilities.a1[name] = h2a1;
	params.h2.abilities.a2[name] = h2a2;
	params.h2.abilities.a3[name] = h2a3;
	params.h2.abilities.a4[name] = h2a4;

	params.h2.abilities.a1[imagesrc] = hero_info.heroes[h2class].abilities[h2a1][image];
	params.h2.abilities.a2[imagesrc] = hero_info.heroes[h2class].abilities[h2a2][image];
	params.h2.abilities.a3[imagesrc] = hero_info.heroes[h2class].abilities[h2a3][image];
	params.h2.abilities.a4[imagesrc] = hero_info.heroes[h2class].abilities[h2a4][image];

	if(trinket_info.pvp.General.hasOwnProperty(h2t1)) {
		params.h2.trinkets.t1[imagesrc] = trinket_info.pvp.General[h2t1][image];
	} else {
		params.h2.trinkets.t1[imagesrc] = trinket_info.pvp[h2class][h2t1][image];
	}

	if(trinket_info.pvp.General.hasOwnProperty(h2t2)) {
		params.h2.trinkets.t2[imagesrc] = trinket_info.pvp.General[h2t2][image];
	} else {
		params.h2.trinkets.t2[imagesrc] = trinket_info.pvp[h2class][h2t2][image];
	}
	//load hero three info
	params.h3[name] = h3class;
	params.h3[imagesrc] = hero_info.heroes[h3class][image];

	params.h3.abilities.a1[name] = h1a1;
	params.h3.abilities.a2[name] = h1a2;
	params.h3.abilities.a3[name] = h1a3;
	params.h3.abilities.a4[name] = h1a4;

	params.h3.abilities.a1[imagesrc] = hero_info.heroes[h3class].abilities[h3a1][image];
	params.h3.abilities.a2[imagesrc] = hero_info.heroes[h3class].abilities[h3a2][image];
	params.h3.abilities.a3[imagesrc] = hero_info.heroes[h3class].abilities[h3a3][image];
	params.h3.abilities.a4[imagesrc] = hero_info.heroes[h3class].abilities[h3a4][image];

	if(trinket_info.pvp.General.hasOwnProperty(h3t1)) {
		params.h3.trinkets.t1[imagesrc] = trinket_info.pvp.General[h3t1][image];
	} else {
		params.h3.trinkets.t1[imagesrc] = trinket_info.pvp[h3class][h3t1][image];
	}

	if(trinket_info.pvp.General.hasOwnProperty(h3t2)) {
		params.h3.trinkets.t2[imagesrc] = trinket_info.pvp.General[h3t2][image];
	} else {
		params.h3.trinkets.t2[imagesrc] = trinket_info.pvp[h3class][h3t2][image];
	}

	//load hero four info
	params.h4[name] = h4class;
	params.h4[imagesrc] = hero_info.heroes[h4class][image];

	params.h4.abilities.a1[name] = h4a1;
	params.h4.abilities.a2[name] = h4a2;
	params.h4.abilities.a3[name] = h4a3;
	params.h4.abilities.a4[name] = h4a4;

	params.h4.abilities.a1[imagesrc] = hero_info.heroes[h4class].abilities[h4a1][image];
	params.h4.abilities.a2[imagesrc] = hero_info.heroes[h4class].abilities[h4a2][image];
	params.h4.abilities.a3[imagesrc] = hero_info.heroes[h4class].abilities[h4a3][image];
	params.h4.abilities.a4[imagesrc] = hero_info.heroes[h4class].abilities[h4a4][image];

	if(trinket_info.pvp.General.hasOwnProperty(h4t1)) {
		params.h4.trinkets.t1[imagesrc] = trinket_info.pvp.General[h4t1][image];
	} else {
		params.h4.trinkets.t1[imagesrc] = trinket_info.pvp[h4class][h4t1][image];
	}

	if(trinket_info.pvp.General.hasOwnProperty(h4t2)) {
		params.h4.trinkets.t2[imagesrc] = trinket_info.pvp.General[h4t2][image];
	} else {
		params.h4.trinkets.t2[imagesrc] = trinket_info.pvp[h4class][h4t2][image];
	}

	console.log(params);

	return params;
}

function loadHeroJSON() {
	// include file system module
	var fs = require('fs');
	path = __dirname + "/public/data/heroes.json";
	// read file sample.json file
	var text = fs.readFileSync(path) 
	var jsonParsed = JSON.parse(text);
	return jsonParsed;
}

function loadTrinketJSON() {
	// include file system module
	var fs = require('fs');
	path = __dirname + "/public/data/trinkets.json";
	// read file sample.json file
	var text = fs.readFileSync(path) 
	var jsonParsed = JSON.parse(text);
	return jsonParsed;
}






