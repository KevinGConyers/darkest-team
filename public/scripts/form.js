const herodata = "/data/heroes.json";
let dropdown1 = $('#hero1_select');
let dropdown2 = $('#hero2_select');
let dropdown3 = $('#hero3_select');
let dropdown4 = $('#hero4_select');
let hero_for_append = 'hero'


document.getElementById("hero1_select").name = hero_for_append + "-1"
document.getElementById("hero2_select").name = hero_for_append + "-2"
document.getElementById("hero3_select").name = hero_for_append + "-3"
document.getElementById("hero4_select").name = hero_for_append + "-4"

dropdown1.empty();
dropdown2.empty();
dropdown3.empty();
dropdown4.empty();

dropdown1.append('<option selected="true" disabled>Choose Hero</option>');
dropdown2.append('<option selected="true" disabled>Choose Hero</option>');
dropdown3.append('<option selected="true" disabled>Choose Hero</option>');
dropdown4.append('<option selected="true" disabled>Choose Hero</option>');

dropdown1.prop('selectedIndex', 0);
dropdown2.prop('selectedIndex', 0);
dropdown3.prop('selectedIndex', 0);
dropdown4.prop('selectedIndex', 0);


// Populate dropdown with list of provinces
$.getJSON(herodata, function (data) {
	$.each(data.heroes, function (key, entry) {
		 if (key === "Vestal"){
			dropdown4.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
		 }
		  else if (key === "Plague Doctor"){
			dropdown3.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
		 }
		 else if (key === "Highwayman"){
			dropdown2.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
		 }
		  else if (key === "Crusader"){
			dropdown1.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
		 } else {
			dropdown1.append($('<option></option>').attr('value', key).text(key));
			dropdown2.append($('<option></option>').attr('value', key).text(key));
			dropdown3.append($('<option></option>').attr('value', key).text(key));
			dropdown4.append($('<option></option>').attr('value', key).text(key));
		 }

	})
	generateAbilitySelection("hero1_select", "abil1");
	generateAbilitySelection("hero2_select", "abil2");
	generateAbilitySelection("hero3_select", "abil3");
	generateAbilitySelection("hero4_select", "abil4");
	document.getElementById('abil1').style.display='block';
	document.getElementById('abil2').style.display='block';
	document.getElementById('abil3').style.display='block';
	document.getElementById('abil4').style.display='block';
});
document.getElementById('abil1').style.display='none';
document.getElementById('abil2').style.display='none';
document.getElementById('abil3').style.display='none';
document.getElementById('abil4').style.display='none';

generateAbilitySelection("hero1_select", "abil1");
generateAbilitySelection("hero2_select", "abil2");
generateAbilitySelection("hero3_select", "abil3");
generateAbilitySelection("hero4_select", "abil4");

function updateImage(select_id, image_id) {
	hero_name = document.getElementById(select_id).value;
	$.getJSON(herodata, function(data){
		new_img_src = data.heroes[hero_name].image;
		document.getElementById(image_id).src = new_img_src;
	});
}
function getAbilities(hero_name, callback) {
	$.getJSON(herodata, function(data) {
		callback(data.heroes[hero_name].abilities);
	});
}
function generateAbilitySelection(select_id, ability_pane_id) {
	hero_name = document.getElementById(select_id).value;
	let ability_pane = $('#'+ability_pane_id);
	ability_pane.empty();
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-1", "class": "ability_select", 'name': ability_pane_id + "-1"}));
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-2", "class": "ability_select", 'name': ability_pane_id + "-2"}));
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-3", "class": "ability_select", 'name': ability_pane_id + "-3"}));
	ability_pane.append($('<select></select>').attr({'id': ability_pane_id + "-4", "class": "ability_select", 'name': ability_pane_id + "-4"}));
	for( i = 1; i <= 4; i++) {
		let cur_select = ability_pane_id + "-" + i.toString();
		getAbilities(hero_name, function(data) {
			sel = $('#'+cur_select);
			num = 1;
			$.each(data, function(key) {
				console.log(sel[0]["id"].slice(sel[0]["id"].length - 1));
				let ability_num = parseInt(sel[0]["id"].slice(sel[0]["id"].length - 1));
				console.log(num + " " + ability_num);
				console.log(key);
						if(num == ability_num) {
								sel.append($('<option></option>').attr({'value': key, 'selected': 'selected'}).text(key));
							} else {
						sel.append($('<option></option>').attr({'value': key}).text(key));
					}
				num++;
			});
		});
	} 
}

$('#hero1_select').change(function(){
	updateImage("hero1_select", "Hero1");
	generateAbilitySelection("hero1_select", "abil1");
	document.getElementById('abil1').style.display='block';
})
$('#hero2_select').change(function(){
	updateImage("hero2_select", "Hero2");
	generateAbilitySelection("hero2_select", "abil2");
	document.getElementById('abil2').style.display='block';

})
$('#hero3_select').change(function(){
	updateImage("hero3_select", "Hero3");
	generateAbilitySelection("hero3_select", "abil3");
	document.getElementById('abil3').style.display='block';

})
$('#hero4_select').change(function(){
	updateImage("hero4_select", "Hero4");
	generateAbilitySelection("hero4_select", "abil4");
	document.getElementById('abil4').style.display='block';

})