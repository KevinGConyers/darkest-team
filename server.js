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


app.get('/', function (req, res) {
  res.render('index')
})

app.post('/', function (req, res) {
  console.log("button pressed");
  params = getParamsObject(req.body);
  res.render('image_preview', params)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


function getParamsObject(body) {
  //console.log(body);
  var info = loadJSON();
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

  //load hero one info
  params.h1[name] = h1class;
  params.h1[imagesrc] = info.heroes[h1class][image];

  params.h1.abilities.a1[name] = h1a1;
  params.h1.abilities.a2[name] = h1a2;
  params.h1.abilities.a3[name] = h1a3;
  params.h1.abilities.a4[name] = h1a4;

  params.h1.abilities.a1[imagesrc] = info.heroes[h1class].abilities[h1a1][image];
  params.h1.abilities.a2[imagesrc] = info.heroes[h1class].abilities[h1a2][image];
  params.h1.abilities.a3[imagesrc] = info.heroes[h1class].abilities[h1a3][image];
  params.h1.abilities.a4[imagesrc] = info.heroes[h1class].abilities[h1a4][image];

  //load hero one info
  params.h1[name] = h1class;
  params.h1[imagesrc] = info.heroes[h1class][image];

  params.h1.abilities.a1[name] = h1a1;
  params.h1.abilities.a2[name] = h1a2;
  params.h1.abilities.a3[name] = h1a3;
  params.h1.abilities.a4[name] = h1a4;

  params.h1.abilities.a1[imagesrc] = info.heroes[h1class].abilities[h1a1][image];
  params.h1.abilities.a2[imagesrc] = info.heroes[h1class].abilities[h1a2][image];
  params.h1.abilities.a3[imagesrc] = info.heroes[h1class].abilities[h1a3][image];
  params.h1.abilities.a4[imagesrc] = info.heroes[h1class].abilities[h1a4][image];

  //load hero two info
  params.h2[name] = h1class;
  params.h2[imagesrc] = info.heroes[h2class][image];

  params.h2.abilities.a1[name] = h2a1;
  params.h2.abilities.a2[name] = h2a2;
  params.h2.abilities.a3[name] = h2a3;
  params.h2.abilities.a4[name] = h2a4;

  params.h2.abilities.a1[imagesrc] = info.heroes[h2class].abilities[h2a1][image];
  params.h2.abilities.a2[imagesrc] = info.heroes[h2class].abilities[h2a2][image];
  params.h2.abilities.a3[imagesrc] = info.heroes[h2class].abilities[h2a3][image];
  params.h2.abilities.a4[imagesrc] = info.heroes[h2class].abilities[h2a4][image];

  //load hero three info
  params.h3[name] = h3class;
  params.h3[imagesrc] = info.heroes[h3class][image];

  params.h3.abilities.a1[name] = h1a1;
  params.h3.abilities.a2[name] = h1a2;
  params.h3.abilities.a3[name] = h1a3;
  params.h3.abilities.a4[name] = h1a4;

  params.h3.abilities.a1[imagesrc] = info.heroes[h3class].abilities[h3a1][image];
  params.h3.abilities.a2[imagesrc] = info.heroes[h3class].abilities[h3a2][image];
  params.h3.abilities.a3[imagesrc] = info.heroes[h3class].abilities[h3a3][image];
  params.h3.abilities.a4[imagesrc] = info.heroes[h3class].abilities[h3a4][image];

   //load hero four info
   params.h4[name] = h4class;
   params.h4[imagesrc] = info.heroes[h4class][image];
 
   params.h4.abilities.a1[name] = h4a1;
   params.h4.abilities.a2[name] = h4a2;
   params.h4.abilities.a3[name] = h4a3;
   params.h4.abilities.a4[name] = h4a4;
 
   params.h4.abilities.a1[imagesrc] = info.heroes[h4class].abilities[h4a1][image];
   params.h4.abilities.a2[imagesrc] = info.heroes[h4class].abilities[h4a2][image];
   params.h4.abilities.a3[imagesrc] = info.heroes[h4class].abilities[h4a3][image];
   params.h4.abilities.a4[imagesrc] = info.heroes[h4class].abilities[h4a4][image];
 
 
   console.log(params);

  return params;
}

function loadJSON() {
  // include file system module
  var fs = require('fs');
  path = __dirname + "/public/data/heroes.json";
  // read file sample.json file
  var text = fs.readFileSync(path) 
  var jsonParsed = JSON.parse(text);
  return jsonParsed;
}








